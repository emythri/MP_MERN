// src/SimplexMethodSolve.js
import React, { useState } from 'react';
import './SimplexMethodSolve.css'; // Optional: for specific styles

function SimplexMethodSolve() {
    const [optType, setOptType] = useState('maximize');
    const [variables, setVariables] = useState(1);
    const [constraintsCount, setConstraintsCount] = useState(1);
    const [objective, setObjective] = useState('');
    const [constraints, setConstraints] = useState(['']);
    const [solution, setSolution] = useState(null);

    const generateFields = () => {
        setConstraints(new Array(constraintsCount).fill(''));
    };

    const handleConstraintsChange = (index, value) => {
        const newConstraints = [...constraints];
        newConstraints[index] = value;
        setConstraints(newConstraints);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Parse inputs
        const parsedObjective = objective.split(' ').map(Number);
        const parsedConstraints = constraints.map(constraint => constraint.split(' ').map(Number));
        
        // Run Simplex method
        const result = solveSimplex(parsedObjective, parsedConstraints);
        setSolution(result);
    };

    // Simplex method implementation (basic version)
    const solveSimplex = (objective, constraints) => {
        // This is just a placeholder for the Simplex algorithm logic.
        // You can implement a more complex and complete version of the Simplex method here.
        let result = {};
        let tableau = buildTableau(objective, constraints);
        
        // Run the Simplex method until an optimal solution is found.
        // In this example, we're just showing the tableau matrix.
        // You should implement the steps of the Simplex method here to modify the tableau.
        
        // For now, let's return the tableau matrix as a placeholder.
        result.tableau = tableau;
        
        return result;
    };

    const buildTableau = (objective, constraints) => {
        // Build initial Simplex tableau (for maximization or minimization)
        let tableau = [];
        // The first row corresponds to the objective function.
        tableau.push([...objective, 0]); // Add 0 for the objective row (this is a placeholder)

        // Build the rest of the tableau using the constraints
        constraints.forEach((constraint) => {
            tableau.push([...constraint, 0]); // Add RHS value (also placeholder)
        });

        return tableau;
    };

    return (
        <div className="solve">
            <h1>Solve Problem (Simplex Method)</h1>
            <p>Enter the details below to solve a linear programming problem using the Simplex Method.</p>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="opt_type">Optimization Type:</label>
                        <select id="opt_type" name="opt_type" className="form-control" value={optType} onChange={(e) => setOptType(e.target.value)}>
                            <option value="maximize">Maximize</option>
                            <option value="minimize">Minimize</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="variables">Number of Variables:</label>
                        <input
                            type="number"
                            id="variables"
                            name="variables"
                            className="form-control"
                            value={variables}
                            onChange={(e) => setVariables(Number(e.target.value))}
                            min="1"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="constraints_count">Number of Constraints:</label>
                        <input
                            type="number"
                            id="constraints_count"
                            name="constraints_count"
                            className="form-control"
                            value={constraintsCount}
                            onChange={(e) => setConstraintsCount(Number(e.target.value))}
                            min="1"
                            required
                        />
                    </div>
                    <button type="button" className="btn btn-info" onClick={generateFields}>Generate</button>
                    <div className="form-group">
                        <label htmlFor="objective">Objective Function (ensure space b/w variables):</label>
                        <input
                            type="text"
                            id="objective"
                            name="objective"
                            className="form-control"
                            placeholder="e.g: 1 2 3"
                            value={objective}
                            onChange={(e) => setObjective(e.target.value)}
                            required
                        />
                    </div>
                    <h3>Constraints</h3>
                    <div id="constraints">
                        {constraints.map((constraint, index) => (
                            <div key={index} className="constraint form-group">
                                <label>Constraint {index + 1}:</label>
                                <input
                                    type="text"
                                    name={`constraints[${index}]`}
                                    className="form-control"
                                    placeholder="e.g: 1 2 3"
                                    value={constraint}
                                    onChange={(e) => handleConstraintsChange(index, e.target.value)}
                                    required
                                />
                            </div>
                        ))}
                    </div>
                    <br /><br />
                    <button type="submit" className="btn btn-primary">Solve</button>
                </form>
                <br />
                <button type="button" className="btn btn-secondary" onClick={() => window.location.href = '/simplex'}>
                    Back
                </button>

                {solution && solution.tableau && (
                    <div>
                        <h2>Simplex Tableau</h2>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Coefficients</th>
                                    <th>Constraints</th>
                                </tr>
                            </thead>
                            <tbody>
                                {solution.tableau.map((row, index) => (
                                    <tr key={index}>
                                        {row.map((col, colIndex) => (
                                            <td key={colIndex}>{col}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SimplexMethodSolve;


// // src/SimplexMethodSolve.js
// import React, { useState } from 'react';
// import './SimplexMethodSolve.css'; // Optional: for specific styles

// function SimplexMethodSolve() {
//     const [optType, setOptType] = useState('maximize');
//     const [variables, setVariables] = useState(1);
//     const [constraintsCount, setConstraintsCount] = useState(1);
//     const [objective, setObjective] = useState('');
//     const [constraints, setConstraints] = useState(['']);

//     const generateFields = () => {
//         setConstraints(new Array(constraintsCount).fill(''));
//     };

//     const handleConstraintsChange = (index, value) => {
//         const newConstraints = [...constraints];
//         newConstraints[index] = value;
//         setConstraints(newConstraints);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle form submission logic (e.g., API call)
//     };

//     return (
//         <div className="solve">
//             <h1>Solve Problem (Simplex Method)</h1>
//             <p>Enter the details below to solve a linear programming problem using the Simplex Method.</p>
//             <div className="container">
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="opt_type">Optimization Type:</label>
//                         <select id="opt_type" name="opt_type" className="form-control" value={optType} onChange={(e) => setOptType(e.target.value)}>
//                             <option value="maximize">Maximize</option>
//                             <option value="minimize">Minimize</option>
//                         </select>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="variables">Number of Variables:</label>
//                         <input
//                             type="number"
//                             id="variables"
//                             name="variables"
//                             className="form-control"
//                             value={variables}
//                             onChange={(e) => setVariables(Number(e.target.value))}
//                             min="1"
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="constraints_count">Number of Constraints:</label>
//                         <input
//                             type="number"
//                             id="constraints_count"
//                             name="constraints_count"
//                             className="form-control"
//                             value={constraintsCount}
//                             onChange={(e) => setConstraintsCount(Number(e.target.value))}
//                             min="1"
//                             required
//                         />
//                     </div>
//                     <button type="button" className="btn btn-info" onClick={generateFields}>Generate</button>
//                     <div className="form-group">
//                         <label htmlFor="objective">Objective Function (ensure space b/w variables):</label>
//                         <input
//                             type="text"
//                             id="objective"
//                             name="objective"
//                             className="form-control"
//                             placeholder="e.g: 1 2 3"
//                             value={objective}
//                             onChange={(e) => setObjective(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <h3>Constraints</h3>
//                     <div id="constraints">
//                         {constraints.map((constraint, index) => (
//                             <div key={index} className="constraint form-group">
//                                 <label>Constraint {index + 1}:</label>
//                                 <input
//                                     type="text"
//                                     name={`constraints[${index}]`}
//                                     className="form-control"
//                                     placeholder="e.g: 1 2 3"
//                                     value={constraint}
//                                     onChange={(e) => handleConstraintsChange(index, e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                     <br /><br />
//                     <button type="submit" className="btn btn-primary">Solve</button>
//                 </form>
//                 <br />
//                 <button type="button" className="btn btn-secondary" onClick={() => window.location.href = '/simplex'}>
//                     Back
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default SimplexMethodSolve;
