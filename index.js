const express = require('express');
const mongoose = require('mongoose');
const cartRoutes = require('./db/routes/cartRoutes'); // Import cart routes

const app = express();
const port = 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// Use cart routes
app.use(cartRoutes);

mongoose.connect('mongodb://localhost:27017/internship', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
