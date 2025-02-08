// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the root route
app.get('/', (req, res) => {
    res.send('Welcome to the MERN Project!');
});

// Define your routes
app.post('/api/solve_graphical', async (req, res) => {
    const response = await fetch('http://localhost:8000/api/solve_graphical/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
