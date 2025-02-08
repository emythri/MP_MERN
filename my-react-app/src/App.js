// src/App.js
import React, { useState } from 'react';

function App() {
    const [constraints, setConstraints] = useState(['']);
    const [objective, setObjective] = useState('');
    const [solution, setSolution] = useState(null);

    const handleAddConstraint = () => {
        setConstraints([...constraints, '']);
    };

    const handleChangeConstraint = (index, value) => {
        const newConstraints = constraints.slice();
        newConstraints[index] = value;
        setConstraints(newConstraints);
    };

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:5000/api/solve_graphical', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                opt_type: 'maximize',
                objective: objective,
                constraints: constraints
            })
        });
        const data = await response.json();
        setSolution(data);
    };

    return (
        <div>
            <h1>Linear Programming Solver</h1>
            <div>
                <h2>Objective Function</h2>
                <input
                    type="text"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="Enter objective function"
                />
            </div>
            <div>
                <h2>Constraints</h2>
                {constraints.map((constraint, index) => (
                    <input
                        key={index}
                        type="text"
                        value={constraint}
                        onChange={(e) => handleChangeConstraint(index, e.target.value)}
                        placeholder="Enter constraint"
                    />
                ))}
                <button onClick={handleAddConstraint}>Add Constraint</button>
            </div>
            <button onClick={handleSubmit}>Solve</button>
            {solution && (
                <div>
                    <h2>Solution</h2>
                    {solution.no_solution ? (
                        <p>{solution.solution_message}</p>
                    ) : (
                        <div>
                            <p>x₁: {solution.x1_opt}</p>
                            <p>x₂: {solution.x2_opt}</p>
                            <p>Z: {solution.objective_value}</p>
                        </div>
                    )}
                    <img src={`data:image/png;base64,${solution.graph}`} alt="Solution Graph" />
                </div>
            )}
        </div>
    );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
