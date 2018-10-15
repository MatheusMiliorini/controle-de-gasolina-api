var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json({
        nome:"Matheus",
        sobrenome:"Miliorini"
    })
});

app.listen(3000,function() {
    console.log('Servidor rodando na porta 3000');
});