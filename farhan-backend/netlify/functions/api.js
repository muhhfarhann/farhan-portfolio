const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const path = require('path');

// Import existing routes
const contactRoutes = require('../../src/routes/contact');

const app = express();

// Middleware
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/', (req, res) => {
    res.json({
        message: 'Farhan Backend API is running on Netlify!',
        timestamp: new Date().toISOString()
    });
});

// Use existing routes
app.use('/api/contact', contactRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Export sebagai Netlify function
module.exports.handler = serverless(app);