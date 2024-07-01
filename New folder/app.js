const express = require('express');
const app = express();
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser');
const PORT = 3000;
const ip = 'localhost'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(express.static('public/'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})
app.listen(PORT, () => {
    console.log(`Server en http://${ip}:${PORT}`)
})