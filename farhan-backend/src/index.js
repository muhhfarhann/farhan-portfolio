// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import contactRoutes from './routes/contact.js';

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const contactRoutes = require('./routes/contact.js')

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});