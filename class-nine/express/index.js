const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    type: 'application/x-www-form-urlencoded',
    extended: true,
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/about.html'));
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Hola Mundo..')
});

app.listen(3501);