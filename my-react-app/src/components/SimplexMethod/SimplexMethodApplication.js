// src/SimplexMethodApplication.js
import React from 'react';
import './SimplexMethodApplication.css'; // Optional: for specific styles

function SimplexMethodApplication() {
    return (
        <div className="application">
            <h1>Application (Simplex Method)</h1>
            <p>Real-world applications of the Simplex method in linear programming.</p>
            <p>
                One of the most prominent real-world applications of the Simplex Method is in logistics and supply chain management.
                Companies use the Simplex Method to optimize their supply chain operations by minimizing transportation costs, managing 
                inventory levels, and scheduling deliveries efficiently. For example, a logistics company might use the Simplex Method to 
                determine the most cost-effective way to transport goods from multiple warehouses to numerous retail stores while adhering 
                to constraints like delivery deadlines, warehouse capacities, and transportation costs. This ensures that the company 
                operates efficiently, reduces costs, and meets customer demands effectively.
            </p>
            <br />
            <button type="button" className="btn btn-secondary" onClick={() => window.location.href = '/simplex'}>
                Back
            </button>
        </div>
    );
}

export default SimplexMethodApplication;
