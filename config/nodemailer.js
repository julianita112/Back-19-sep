const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com', // Cambia a smtp-relay.sendinblue.com
    port: 587, // Asegúrate de usar 587 para TLS
    secure: false, // Cambia a false para el puerto 587
    auth: {
        user: '7a32e9001@smtp-brevo.com', // Tu identificador de Brevo
        pass: 'g50qAH7IRt3DLSzd', // Tu contraseña de Brevo
    },
    tls: {
        rejectUnauthorized: false // Desactiva la verificación del certificado en desarrollo
    }
});

module.exports = transporter;