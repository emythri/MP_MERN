// src/GraphicalMethodSolve.js
import './GraphicalMethodSolve.css';
import React, { useState } from 'react';

function GraphicalMethodSolve() {
    const [optType, setOptType] = useState('maximize');
    const [constraintsCount, setConstraintsCount] = useState(1);
    const [objective, setObjective] = useState('');
    const [constraints, setConstraints] = useState(['']);

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
        // Handle form submission logic (e.g., API call)
    };

    return (
        <div>
            <h1>Solve Problem (Graphical Method)</h1>
            <p>Enter the details below. The graphical method only works for problems with two variables.</p>
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
                        <label htmlFor="objective">Objective Function Coefficients (c₁ c₂):</label>
                        <input
                            type="text"
                            id="objective"
                            name="objective"
                            className="form-control"
                            placeholder="e.g., 3 5"
                            value={objective}
                            onChange={(e) => setObjective(e.target.value)}
                            required
                        />
                    </div>
                    <h3>Constraints</h3>
                    <div id="constraints">
                        {constraints.map((constraint, index) => (
                            <div key={index} className="constraint form-group">
                                <label>Constraint {index + 1} Coefficients and RHS (a₁ a₂ b):</label>
                                <input
                                    type="text"
                                    name={`constraints[${index}]`}
                                    className="form-control"
                                    placeholder="e.g., 1 2 20"
                                    value={constraint}
                                    onChange={(e) => handleConstraintsChange(index, e.target.value)}
                                    required
                                />
                            </div>
                        ))}
                    </div>
                    <br /><br />
                    <button type="submit" className="btn btn-primary">Plot Graph</button>
                </form>
                <br />
                <button type="button" className="btn btn-secondary" onClick={() => window.location.href = '/graphical'}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default GraphicalMethodSolve;
