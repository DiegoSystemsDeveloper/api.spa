const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//settings 
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(bodyParser.json()); //funcion  que permite entender formatos json
app.use(bodyParser.urlencoded({ extended: false })); //funcion que me permite procesar datos de un formulario

//routes
app.use('/api', require('./routes/index'));
app.use('/', (req, res) => { res.send('Welcome to mi API!') })

//listening server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});