// src/SimplexMethodPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SimplexMethodPage.css'; // Optional: for specific styles

function SimplexMethodPage() {
    return (
        <div className="simplex-method">
            <h1>Simplex Method</h1>
            <p className="intro-text">
                The Simplex Method is an efficient algorithm used to solve linear programming problems with more than two variables.
            </p>
            <p className="intro-text">
                Unlike the graphical method, which is limited to two-dimensional problems, the simplex method iteratively moves along
                the edges of the feasible region to find the optimal solution.
            </p>
            <div className="buttons" id="buttons">
                <Link to="/simplex-steps">Steps to Solve</Link>
                <Link to="/simplex-solve">Solve Problem</Link>
                <Link to="/simplex-application">Applications</Link>
            </div>
            <br />
            <button type="button" className="btn btn-secondary" onClick={() => window.location.href = '/'}>
                Home
            </button>
        </div>
    );
}

export default SimplexMethodPage;
