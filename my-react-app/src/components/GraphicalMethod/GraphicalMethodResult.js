// src/GraphicalMethodResult.js
import React from 'react';
import './GraphicalMethodResult.css'; // Optional: for specific styles

function GraphicalMethodResult({ error, noSolution, solutionMessage, x1Opt, x2Opt, objectiveValue, graph }) {
    return (
        <div>
            <h1>Graphical Method Result</h1>
            {error && (
                <div className="alert alert-danger">
                    <p><strong>Error:</strong> {error}</p>
                </div>
            )}
            {noSolution ? (
                <div className="alert alert-danger">
                    <p><strong>Error:</strong> {solutionMessage}</p>
                </div>
            ) : (
                <div className="alert alert-success">
                    <p><strong>Optimal Solution Found:</strong></p>
                    <p>x₁ = {x1Opt}</p>
                    <p>x₂ = {x2Opt}</p>
                    <p>Objective Value (Z) = {objectiveValue}</p>
                </div>
            )}
            <br />
            <button type="button" className="btn btn-secondary" onClick={() => window.location.href = '/graphical'}>
                Back
            </button>
            {!noSolution && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <img src={`data:image/png;base64,${graph}`} alt="Graphical Solution" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}

export default GraphicalMethodResult;
