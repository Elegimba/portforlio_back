/* const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const fs = require('fs');

// Leer credenciales
const credentials = JSON.parse(fs.readFileSync('credentials.json'));

// Crear el cliente
const oauth2Client = new google.auth.OAuth2(
    credentials.web.client_id,
    credentials.web.client_secret,
    credentials.web.redirect_uris[0]
);

// Leer el token
let tokens = JSON.parse(fs.readFileSync('token.json'));
oauth2Client.setCredentials(tokens);

// Crear el transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USER,
        clientId: credentials.web.client_id,
        clientSecret: credentials.web.client_secret,
        refreshToken: tokens.refresh_token,
        accessToken: tokens.access_token,
    },
    logger: true,
    debug: true,
});

// Verifica el token
oauth2Client.getAccessToken((err, token) => {
    if (err) {
        console.error('Error al obtener el token de acceso', err);
        return;
    }

    console.log('Access Token válido:', token);
});

const updateTransporter = () => {
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USER, // La cuenta de correo a usar
            clientId: credentials.web.client_id,
            clientSecret: credentials.web.client_secret,
            refreshToken: tokens.refresh_token,
            accessToken: tokens.access_token, // El token de acceso renovado
        },
    });
};

// Enviar el correo
const sendEmail = (req, res) => {
    const { nombre, email, mensaje } = req.body;

    // Verificar si el accessToken es válido
    oauth2Client.getAccessToken((err, token) => {
        if (err) {
            console.error('Error al obtener el token de acceso', err);
            res.status(500).send('Error al obtener el token de acceso');
            return;
        }

        // Actualizar el transporter con el nuevo Token
        tokens.access_token = token;
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.MAIL_USER,
                clientId: credentials.web.client_id,
                clientSecret: credentials.web.client_secret,
                refreshToken: tokens.refresh_token,
                accessToken: token,
            },
        });
        updateTransporter();

        const mailOptions = {
            from: email,
            to: process.env.MAIL_USER,
            subject: `Mensaje de ${nombre}`,
            text: mensaje,
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
};


// Actualización del
oauth2Client.on('tokens', (newTokens) => {
    if (newTokens.refresh_token) {
        // Guardar el nuevo refresh_token
        fs.writeFileSync('token.json', JSON.stringify(newTokens));
    }
    console.log('Nuevo token de acceso:', newTokens.access_token);
    tokens = newTokens;

    // Actualizar el transporter
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USER,
            clientId: credentials.web.client_id,
            clientSecret: credentials.web.client_secret,
            refreshToken: tokens.refresh_token,
            accessToken: tokens.access_token,
        },
    });
    console.log("Transporter actualizado con el nuevo access_token.");
});

module.exports = {
    sendEmail
};
 */