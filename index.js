const express = require("express"); // Importando express
const app = express(); // Iniciando e passando a inicialização para a variavel app

// REQ => dados fornecidos pelo usuário
// RES => dados que vai ser enviado

/* Definindo rotas:
    app.get(Nome da rota, O que a rota faz); 
    Atenção: só pode enviar uma resposta uma única vez
*/

// Rota normal
app.get("/", function (req, res) {
    res.send();
});

// Parametros obrigatórios /:parametro
app.get("/ola/:nome/:empresa", function (req, res) {    
    var nome = req.params.nome;
    var empresa = req.params.empresa;

    res.send("<h1>Oi " + nome + " do " + empresa + " </h1>");
});

// Parametros não obrigatórios /:parametro?
app.get("/Deshboard/:obrigatorio?", function (req, res) {
    var obrigatorio = req.params.obrigatorio;
    if (obrigatorio) {
        res.send("Destiboard obrigatorio com valor: " + obrigatorio);
    }
    else {
        res.send("Destboard não obrigaório");
    }
});

/* Parametros enviados pelo usuário
   url --> localhost:4000/Enviados?enviado=Gabriel
   Atenção : entrando em desuso.
*/
app.get("/Enviados", function(req, res){
    // Nome do parametro enviado    
    var enviado = req.query["enviado"];
    if(enviado){
        res.send("O parametro enviado foi: " + enviado);
    }
    else{
        res.send("Nenhum item enviado");
    }    
});

// Primeiro coloco a porta depois a função que inicia o servidor
app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    }
    else {
        console.log("Servidor iniciado com sucesso!")
    }
});

