//npm i --save express body-parser
//create-react-app client
//cd client
//yarn start


const express = require( 'express')

const bodyParser = require('body-parser')

app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false})) // receber requisicoes post

app.get('/',function(req,res){
    res.send('funcionando');
})

const rotas = require('./rotas')
app.use('/api', rotas);
const port = 3001;

//Integrando back-end com front-end
app.use(express.static(__dirname + '/client'))
//tem que adicionar o axios no client yarn add axios
// client -> src ->App.js
//import axios from 'axios';
// no Arquivo App.js
//no packge.json do client adicionar
    // "proxy": "http://localhost:3001/api"

app.listen(port,()=>{
    console.log('server running localhost', port)
})