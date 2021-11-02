let express = require('express');
let bodyParser = require('webpack-body-parser')
let app = express();
let usersController = require('./usersController');
//import {usersController} from './usersController';
let path = require('path');
let HTML_FILE = path.join(__dirname, 'dist/index.html');
//app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(express.static(__dirname+'/dist'));
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
});
usersController(app,__dirname);
app.listen(3000);










/*
const path = require('path')
const express = require('express')
const app = express(),
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, 'dist/index.html')
app.use(express.static(DIST_DIR+'/dist'))
// app.get('*', (req, res) => {
//     res.sendFile(HTML_FILE)
// })
const PORT = process.env.PORT || 3000

let usersController = require('./dist/usersController');
usersController(app,DIST_DIR);

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
*/