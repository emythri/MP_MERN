// src/GraphicalMethodSteps.js
import React from 'react';
import './GraphicalMethodSteps.css'; // Optional: for specific styles

function GraphicalMethodSteps() {
    return (
        <div className="graphical-method-steps">
            <h1>Graphical Method - Steps to Solve</h1>
            <p>
                The Graphical Method is a visual technique used to solve Linear Programming Problems (LPP) involving two decision variables.
                It involves plotting the constraints on a graph, identifying the feasible region, and then finding the optimal solution by
                evaluating the objective function at each corner point of the feasible region.
            </p>
            <h2>Steps to Solve a Linear Programming Problem Using the Graphical Method</h2>
            <ol>
                <li>
                    <strong>Formulate the Linear Programming Problem:</strong>
                    <ul>
                        <li><strong>Decision Variables:</strong> Define \( x_1 \) and \( x_2 \) as the quantities to be determined.</li>
                        <li><strong>Objective Function:</strong> Establish the function to maximize or minimize.</li>
                        <li><strong>Constraints:</strong> List all the limitations in the form of linear inequalities.</li>
                    </ul>
                </li>
                <li>
                    <strong>Convert Inequalities to Equations:</strong>
                    <ul>
                        <li>Replace inequality signs with equal signs for graphing the constraint lines.</li>
                    </ul>
                </li>
                <li>
                    <strong>Plot the Constraint Equations on a Graph:</strong>
                    <ul>
                        <li>Set up a coordinate system with \( x_1 \) on the horizontal axis and \( x_2 \) on the vertical axis.</li>
                        <li>Plot each constraint equation by finding where the line intersects the axes.</li>
                    </ul>
                </li>
                <li>
                    <strong>Identify the Feasible Region:</strong>
                    <ul>
                        <li>Determine the area that satisfies all the constraints simultaneously, including \( x_1 \geq 0 \) and \( x_2 \geq 0 \).</li>
                        <li>Shade or outline the feasible region.</li>
                    </ul>
                </li>
                <li>
                    <strong>Find the Corner Points (Vertices):</strong>
                    <ul>
                        <li>Calculate the intersection points of the constraint lines that form the vertices of the feasible region.</li>
                    </ul>
                </li>
                <li>
                    <strong>Evaluate the Objective Function at Each Corner Point:</strong>
                    <ul>
                        <li>Substitute the coordinates of each vertex into the objective function to calculate its value.</li>
                    </ul>
                </li>
                <li>
                    <strong>Determine the Optimal Solution:</strong>
                    <ul>
                        <li><strong>Maximization:</strong> Choose the vertex with the highest objective function value.</li>
                        <li><strong>Minimization:</strong> Choose the vertex with the lowest objective function value.</li>
                    </ul>
                </li>
                <li>
                    <strong>Interpret the Results:</strong>
                    <ul>
                        <li>Provide the optimal values of the decision variables and the objective function, ensuring practical applicability.</li>
                    </ul>
                </li>
            </ol>

            <h2>Example Problem: Maximizing Profit</h2>
            <p><strong>Problem Statement:</strong></p>
            <p>
                A manufacturer produces two products, A and B. Each product requires processing on two machines.
            </p>
            <ul>
                <li><strong>Machine 1:</strong>
                    <ul>
                        <li>Product A requires 2 hours.</li>
                        <li>Product B requires 1 hour.</li>
                        <li>Available machine time is 100 hours per week.</li>
                    </ul>
                </li>
                <li><strong>Machine 2:</strong>
                    <ul>
                        <li>Product A requires 1 hour.</li>
                        <li>Product B requires 1 hour.</li>
                        <li>Available machine time is 80 hours per week.</li>
                    </ul>
                </li>
                <li><strong>Profit:</strong>
                    <ul>
                        <li>Product A: $40 per unit</li>
                        <li>Product B: $30 per unit</li>
                    </ul>
                </li>
            </ul>

            <h3>Step-by-Step Solution</h3>
            <ol>
                <li>
                    <strong>Define the Decision Variables:</strong>
                    <ul>
                        <li>\( x_1 \) = number of units of Product A produced per week.</li>
                        <li>\( x_2 \) = number of units of Product B produced per week.</li>
                    </ul>
                </li>
                <li>
                    <strong>Formulate the Objective Function:</strong>
                    <p>Maximize \( Z = 40x_1 + 30x_2 \)</p>
                </li>
                <li>
                    <strong>Establish the Constraints:</strong>
                    <ul>
                        <li>Machine 1: \( 2x_1 + x_2 \leq 100 \)</li>
                        <li>Machine 2: \( x_1 + x_2 \leq 80 \)</li>
                        <li>Non-negativity: \( x_1, x_2 \geq 0 \)</li>
                    </ul>
                </li>
                <li>
                    <strong>Convert Inequalities to Equations for Graphing:</strong>
                    <ul>
                        <li>\( 2x_1 + x_2 = 100 \)</li>
                        <li>\( x_1 + x_2 = 80 \)</li>
                    </ul>
                </li>
                <li>
                    <strong>Plot the Constraint Equations:</strong>
                    <p>Find intercepts and plot the lines on a graph (not displayed here).</p>
                </li>
                <li>
                    <strong>Identify the Feasible Region:</strong>
                    <p>The feasible region is the overlapping area that satisfies all constraints.</p>
                </li>
                <li>
                    <strong>Find the Corner Points:</strong>
                    <ul>
                        <li>Point O: \( (0, 0) \)</li>
                        <li>Point A: \( (0, 80) \)</li>
                        <li>Point B: Intersection of \( 2x_1 + x_2 = 100 \) and \( x_1 + x_2 = 80 \):
                            <ul>
                                <li>Solve the equations to find \( x_1 = 20 \), \( x_2 = 60 \)</li>
                            </ul>
                        </li>
                        <li>Point C: \( (50, 0) \)</li>
                    </ul>
                </li>
                <li>
                    <strong>Evaluate the Objective Function at Each Corner Point:</strong>
                    <ul>
                        <li>Point O: \( Z = \$0 \)</li>
                        <li>Point A: \( Z = \$2,400 \)</li>
                        <li>Point B: \( Z = 40(20) + 30(60) = \$2,800 \)</li>
                        <li>Point C: \( Z = \$2,000 \)</li>
                    </ul>
                </li>
                <li>
                    <strong>Determine the Optimal Solution:</strong>
                    <p>The maximum profit of \$2,800 occurs at Point B (\( x_1 = 20 \), \( x_2 = 60 \)).</p>
                </li>
                <li>
                    <strong>Interpret the Results:</strong>
                    <p>Produce 20 units of Product A and 60 units of Product B to maximize profit.</p>
                </li>
            </ol>
        </div>
    );
}

export default GraphicalMethodSteps;
