// Server creation and configuration
const http = require('http');
const app = require('./src/app');

// Config .env
require('dotenv').config();

// Config BD
require('./src/config/db');

// Server creation
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Listeners
server.on('listening', () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on('error', (error) => {
    console.log(error);
});







/* const express = require('express');
const { google } = require('googleapis');
const readline = require('readline');
const fs = require('fs');

// Carga las credenciales desde el archivo
const CREDENTIALS_PATH = 'credentials.json'; // Archivo JSON con las credenciales descargadas desde Google Cloud
const SCOPES = ['https://www.googleapis.com/auth/gmail.send']; // Alcance requerido para enviar correos
const REDIRECT_URI = 'http://localhost:3000/auth/callback'; // URI de redirección

// Cargar las credenciales del archivo
fs.readFile(CREDENTIALS_PATH, (err, content) => {
    if (err) {
        console.log('Error al cargar las credenciales:', err);
        return;
    }

    // Crea el cliente OAuth2
    const credentials = JSON.parse(content);
    const { client_id, client_secret, redirect_uris } = credentials.web;

    const oauth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        REDIRECT_URI
    );

    // Configura Express
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Genera la URL de autorización
    const authorizeUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline', // Necesario para obtener el refresh_token
        scope: SCOPES,
    });

    // Ruta para iniciar la autorización
    app.get('/auth', (req, res) => {
        res.send(`<h1>Por favor, autoriza la aplicación</h1><a href="${authorizeUrl}">Haz clic aquí para autorizar</a>`);
    });

    // Ruta de callback para recibir el código de autorización de Google
    app.get('/auth/callback', async (req, res) => {
        const code = req.query.code; // El código de autorización que Google pasa

        try {
            // Intercambia el código por un token de acceso y refresh token
            const { tokens } = await oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);

            // Guarda los tokens en un archivo
            fs.writeFileSync('token.json', JSON.stringify(tokens));

            console.log('Tokens guardados correctamente:', tokens);

            res.send('<h1>Autorización exitosa</h1><p>Los tokens han sido guardados correctamente. Puedes proceder a usar la API de Gmail.</p>');
        } catch (error) {
            console.error('Error al obtener el token:', error);
            res.status(500).send('Hubo un error al procesar el código de autorización.');
        }
    });

    // Servidor Express escuchando
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
        console.log('Por favor, visita la siguiente URL para autorizar la aplicación:');
        console.log(authorizeUrl);
    });
}); */
