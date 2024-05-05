const express = require('express');

const { generateShades } = require('./shades');

const app = express();
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

let boxes = []

function generateRandSheeps(num){
    return [...new Array(num)].map(() => {
        return {
            fill: [...new Array(6)].map(() => {
                return `rgb(${[...new Array(3)].map(() => Math.floor(Math.random() * 256)).join(', ')})`
            }).join('/'),
        }
    });
}

app.get('/api/generate-box', (req, res) => {
    res.send(generateRandSheeps(5));
});
app.get('/api/boxes', (req, res) => {
    
});

console.log(generateShades().join('/'));