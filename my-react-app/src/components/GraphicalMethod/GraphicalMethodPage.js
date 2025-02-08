// src/GraphicalMethodPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './GraphicalMethodPage.css'; // Optional: for specific styles

function GraphicalMethodPage() {
    return (
        <div>
            <h1>Graphical Method</h1>
            <p className="intro-text">
                The Graphical Method is a simple technique used to solve linear programming problems with two variables.
            </p>
            <p className="intro-text">
                By plotting the constraints on a graph, the feasible region is identified, and the objective function is
                evaluated at the vertices of this region to find the optimal solution.
            </p>
            <div className="buttons" id="buttons">
                <Link to="/graphical-steps">Steps to Solve</Link>
                <Link to="/graphical-solve">Solve Problem</Link>
                <Link to="/graphical-application">Applications</Link>
            </div>
            <br />
            <button type="button" className="btn btn-secondary" onClick={() => window.location.href = '/'}>
                Home
            </button>
        </div>
    );
}

export default GraphicalMethodPage;
