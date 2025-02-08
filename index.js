// index.js
import express from 'express';
import cors from 'cors';
import { createCanvas } from 'canvas';
import { range, concat, identity, reshape, multiply, zeros, min, max, subtract, divide, reshape as mathReshape, zeros as mathZeros } from 'mathjs';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Define the root route
app.get('/', (req, res) => {
    res.send('Welcome to the MERN Linear Programming Solver!');
});

// Function to solve linear programming using the graphical method and simplex method
app.post('/api/graphical_solve', (req, res) => {
    try {
        const { opt_type, objective, constraints } = req.body;
        const c = objective.split(' ').map(parseFloat);
        if (c.length !== 2) {
            throw new Error('Graphical method supports only two variables.');
        }

        const A_ub = [];
        const b_ub = [];
        constraints.forEach(constraint => {
            const parts = constraint.split(' ');
            if (parts.length !== 3) {
                throw new Error('Each constraint must have exactly two coefficients and a RHS value.');
            }
            A_ub.push([parseFloat(parts[0]), parseFloat(parts[1])]);
            b_ub.push(parseFloat(parts[2]));
        });

        // For maximization, convert to minimization by multiplying c by -1
        const c_lp = opt_type === 'maximize' ? c.map(ci => -ci) : c;

        // Set bounds for variables (non-negative variables)
        const bounds = { lb: [0, 0], ub: [Infinity, Infinity] };

        // Function to solve LP using simplex algorithm
        function solveSimplex(c, A, b, maximize = true) {
            const num_constraints = A.length;
            const num_variables = c.length;
            const simplexTableau = concat(concat(A, identity(num_constraints)), reshape(b, [num_constraints, 1]));
            const objRow = concat(multiply(maximize ? -1 : 1, c), zeros([1, num_constraints + 1]));
            const tableau = concat(simplexTableau, objRow, 0);
            let result = simplexAlgorithm(tableau, num_constraints, num_variables);

            while (!isOptimal(result.tableau)) {
                result = simplexAlgorithm(result.tableau, num_constraints, num_variables);
            }

            const solution = extractSolution(result.tableau, num_constraints, num_variables);
            return solution;
        }

        function simplexAlgorithm(tableau, num_constraints, num_variables) {
            const pivotCol = findPivotColumn(tableau);
            const ratios = findRatios(tableau, pivotCol);
            const pivotRow = findPivotRow(ratios);
            const pivotElement = tableau[pivotRow][pivotCol];
            tableau[pivotRow] = divide(tableau[pivotRow], pivotElement);
            for (let i = 0; i < tableau.length; i++) {
                if (i !== pivotRow) {
                    tableau[i] = subtract(tableau[i], multiply(tableau[i][pivotCol], tableau[pivotRow]));
                }
            }
            return { tableau };
        }

        function findPivotColumn(tableau) {
            const lastRow = tableau[tableau.length - 1];
            return lastRow.indexOf(min(lastRow));
        }

        function findRatios(tableau, pivotCol) {
            const ratios = [];
            for (let i = 0; i < tableau.length - 1; i++) {
                const ratio = tableau[i][tableau[i].length - 1] / tableau[i][pivotCol];
                ratios.push(ratio > 0 ? ratio : Infinity);
            }
            return ratios;
        }

        function findPivotRow(ratios) {
            return ratios.indexOf(min(ratios));
        }

        function isOptimal(tableau) {
            return max(tableau[tableau.length - 1]) <= 0;
        }

        function extractSolution(tableau, num_constraints, num_variables) {
            const solution = mathZeros(num_variables);
            for (let i = 0; i < num_constraints; i++) {
                const basicVarIndex = tableau[i].slice(0, num_variables).indexOf(1);
                if (basicVarIndex !== -1) {
                    solution[basicVarIndex] = tableau[i][tableau[i].length - 1];
                }
            }
            const optimalValue = tableau[tableau.length - 1][tableau[0].length - 1];
            return { solution, optimalValue };
        }

        const { solution, optimalValue } = solveSimplex(c_lp, A_ub, b_ub, opt_type === 'maximize');

        const context = {};

        // Prepare for plotting
        const canvas = createCanvas(800, 600);
        const ctx = canvas.getContext('2d');
        const x1_max = Math.max(...b_ub) * 1.1 || 10;
        const x1_vals = range(0, x1_max, 0.1, true).toArray();

        // Plot the constraints
        A_ub.forEach((row, i) => {
            const [a1, a2] = row;
            const b_i = b_ub[i];
            if (a2 !== 0) {
                const x2_vals = x1_vals.map(x1 => (b_i - a1 * x1) / a2);
                ctx.beginPath();
                ctx.moveTo(0, (b_i - a1 * 0) / a2);
                x1_vals.forEach((x1, index) => ctx.lineTo(x1, x2_vals[index]));
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.moveTo(b_i / a1, 0);
                ctx.lineTo(b_i / a1, x1_max);
                ctx.stroke();
            }
        });

        // Plot optimal solution point
        const x1_opt = solution[0];
        const x2_opt = solution[1];
        ctx.beginPath();
        ctx.arc(x1_opt, x2_opt, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();

        // Convert the canvas to a base64-encoded image
        const buffer = canvas.toBuffer('image/png');
        const graph = buffer.toString('base64');

        context.graph = graph;
        context.x1_opt = x1_opt.toFixed(4);
        context.x2_opt = x2_opt.toFixed(4);
        context.objective_value = optimalValue.toFixed(4);
        context.error = null;

        res.json(context);
    } catch (error) {
        res.status(500).json({ error: `An error occurred: ${error.message}. Please ensure your inputs are correct and try again.` });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
