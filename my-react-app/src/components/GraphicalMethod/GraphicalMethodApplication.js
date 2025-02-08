// src/GraphicalMethodApplication.js
import React from 'react';
import './GraphicalMethodApplication.css'; // Optional: for specific styles

function GraphicalMethodApplication() {
    return (
        <div>
            <h1>Application (Graphical Method)</h1>
            <p>Real-world applications of the graphical method in linear programming.</p>
            <p>
                The graphical method is widely used in various industries such as manufacturing, transportation, finance, and agriculture
                to solve linear programming problems with two variables. It helps in optimizing production, resource allocation, cost minimization, 
                and profit maximization by visually representing constraints and objective functions on a graph.
            </p>
            <br />
            <button type="button" className="btn btn-secondary" onClick={() => window.location.href = '/graphical'}>
                Back
            </button>
        </div>
    );
}

export default GraphicalMethodApplication;
