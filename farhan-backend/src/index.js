const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const contactRoutes = require('./routes/contact.js')

dotenv.config(); // Panggil di awal
console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID); // Debug

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});