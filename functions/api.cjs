const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { login, password } = req.body;

    if (login === 'admin' && password === '12345') {
        res.redirect(302, '/dashboard.html');
    } else {
        res.redirect(302, '/index.html?error=true');
    }
});

module.exports.handler = serverless(app);