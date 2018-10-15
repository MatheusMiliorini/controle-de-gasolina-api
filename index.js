var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json({
        nome:"Matheus",
        sobrenome:"Miliorini",
        idade: 20,
        lindo: true
    })
});

app.listen(process.env.PORT,function() {
    console.log('Servidor rodando na porta 3000');
});