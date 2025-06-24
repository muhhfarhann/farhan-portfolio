import express from 'express';
import { db } from '../config/firebase.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // Validasi input
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    try {
        // Simpan ke Firestore
        await db.collection('contacts').add({
            name,
            email,
            message,
            timestamp: new Date(),
        });
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Failed to submit form' });
    }
});

export default router;