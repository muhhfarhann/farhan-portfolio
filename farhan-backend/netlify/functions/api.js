const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const { db } = require('../../src/config/firebase.js');
const contactRoutes = require('../../src/routes/contact.js');

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: 'Farhan Backend API is running on Netlify!',
        timestamp: new Date().toISOString()
    });
});

app.use('/api/contact', contactRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

module.exports.handler = serverless(app);