const express = require("express"); // Importando express
const app = express(); // Iniciando e passando a inicialização para a variavel app


/* Definindo rotas:
    - Nome da rota;
    - O que a rota faz
    
    Atenção: só pode enviar uma resposta uma única vez
*/

// Rota inicial
app.get("/", function(req, res){
    res.send();
});

// Rota destboard
app.get("/Deshboard", function(req, res){
    res.send();
});


// Primeiro coloco a porta depois a função que inicia o servidor
app.listen(4000,function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    }
    else{
        console.log("Servidor iniciado com sucesso!")
    }
});

