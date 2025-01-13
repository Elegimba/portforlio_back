const router = require('express').Router();
const nodemailer = require('nodemailer');

// Configurar el transportador de nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// Ruta para los correos

router.post('/send-email', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.MAIL_USER,
        subject: `Mensaje de ${nombre}`,
        text: mensaje
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).send(`Error al enviar el correo: ${error.message}`);
        } else {
            console.log('Correo enviado:', info.response);
            res.status(200).send('Correo enviado exitosamente');
        }
    });
});

module.exports = router;