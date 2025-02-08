// src/SimplexMethodResult.js
import React from 'react';
import './SimplexMethodResult.css'; // Optional: for specific styles

function SimplexMethodResult({ error, solution, optimalValue }) {
    return (
        <div className="result">
            <h1>Optimal Solution</h1>
            <div className="container">
                {error ? (
                    <div className="alert alert-danger">
                        <p><strong>Error:</strong> {error}</p>
                    </div>
                ) : (
                    <div className="alert alert-success">
                        <h3>Solution:</h3>
                        <ul>
                            {solution && Object.entries(solution).map(([varName, value]) => (
                                <li key={varName}><strong>{varName}:</strong> {value}</li>
                            ))}
                        </ul>
                        <h4>Optimal Value: {optimalValue}</h4>
                    </div>
                )}
                <a href="/simplex-solve" className="btn btn-primary">Back to Solver</a>
            </div>
        </div>
    );
}

export default SimplexMethodResult;
