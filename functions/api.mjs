import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist', 'index.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.resolve('dist', 'dashboard.html'));
});

app.post('/login', (req, res) => {
    const { login, password } = req.body;

    if (login === 'admin' && password === '12345') {
        res.redirect('/dashboard');
    } else {
        res.redirect('/?error=true');
    }
});

export default app;