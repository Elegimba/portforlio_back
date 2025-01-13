// Creation and configuration of the Express APP
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use (express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// Route configuration

app.use('/api', require('./routes/api.routes'));


// Ruta para los correos

app.post('/send-email', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Mensaje de ${nombre}`,
        text: mensaje
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).send('Error al enviar el correo');
        } else {
            console.log ('Correo enviado:', info.response);
            res.status(200).send('Correo enviado exitosamente');
        }
    });
});


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