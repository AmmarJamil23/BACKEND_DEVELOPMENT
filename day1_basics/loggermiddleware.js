const express = require('express');
const app = express();

function loggerMiddleware(req, res, next) {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
      next();
}

function apiKeyMiddleware(req, res, next) {
    const apiKey = req.header['x-api-key'];

    if(apiKey === 'mysecretkey'){
        console.log('API key verified');
        next();
    }
    else {
        console.log('Invalid API key');
        res.status(401).json({ error: 'Unauthorized - invalid API key'});

    }
}

app.use(loggerMiddleware);
app.use(apiKeyMiddleware);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the protected route!'});
})

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
})