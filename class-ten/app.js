require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/user.route');
const app = express();
require('dotenv').config();

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('connection to db established'))

app.use(express.json());
app.use(express.urlencoded({
    type: 'applicaton/x-www-form-urlencoded',
    extended: true,
}));

app.use('/', userRouter);

app.use('*', (req, res) => {
    res.status(404)
    res.send("Path cannot found")
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on ${HOSTNAME}:${PORT}`)
})