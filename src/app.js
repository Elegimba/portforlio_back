// Creation and configuration of the Express APP
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

app.use (express.urlencoded({ extended: true }));

// Route configuration

app.use('/api', require('./routes/api.routes'));

app.post('/send-email', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user
        }
    })
})

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not found'
    });
})

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json(err);
})

module.exports = app;