// conect to express library
const express = require('express');
// import library body-parser
const bodyParser = require('body-parser');
// our server "app" variable
const app = express();
// parsing json what was sent to body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// ----SERVER---- //
// add port for starting our server
app.use('/api', require('./api'));
app.listen(8888, () => {
    console.log('API app started');
});