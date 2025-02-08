// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Optional: for any specific styles

function Home() {
    return (
        <div className="home">
            <h1>Welcome to Mathematical Programming</h1>
            <p className="intro-text">
                Mathematical programming is a powerful tool used to solve optimization problems.
                It helps in finding the best possible solution to a problem within given constraints.
            </p>
            <p className="intro-text">
                Linear Programming is a mathematical method used to optimize a specific objective,
                such as maximizing profit or minimizing cost, subject to a set of linear constraints.
                It is widely applied in areas like resource allocation, logistics, and decision-making,
                providing efficient solutions to complex problems.
            </p>
            <div className="buttons" id="buttons">
                <Link to="/graphical" id="btn-1">Graphical Method</Link>
                <Link to="/simplex" id="btn-2">Simplex Method</Link>
            </div>
        </div>
    );
}

export default Home;
