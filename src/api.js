const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = express.Router();

//ROTAS

app.use('/', router.get('/', (req, res, next) => {
    res.status(200).send("<h1>API-CHAT</h1>");
}));

app.use('/', router.get('/sobre', (req, res, next) => {
    res.status(200).send({
        "nome" : "FARCHAT",
        "autor" : "Felipe Alves Garcia",
        "versao" : "0.1.0"
    });
}));

module.exports = app;