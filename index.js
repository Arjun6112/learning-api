const express = require('express');
const app = express();
const cors = require('cors');
const port =process.env.PORT ||3000;

app.use(cors());

const apiData= require('./data.json');

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.get('/api', (req, res) => {
    res.send(apiData);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});