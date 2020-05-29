const express = require('express'); //importando o express
const app = express(); ///iniciando o express
const port = 8181; //declarando a porta

app.get("/", function(req,res){// Rota inicial 
    res.send("<h1>Hello Node</h1>")//! Só pode ter uma resposta
}); 

app.get("/hello/:name", function(req,res){//! Parametro
    let name = req.params.name;
    res.send(`<h1>Hello ${name} </h1>`)
});

app.get("/blog/:artigo?",function(req,res){ //! Parametro não obrigatório ?
    let artigo = req.params.artigo;
    if(artigo){
        res.send(`Artigo ${artigo}`)
    }else{
        res.send("Blog")
    }
})

app.get("/youtube",function(req,res){//! Query Params
    var canal = req.query["canal"];
    if(canal){res.send(canal);}
    else{res.send("Youtube");}
})

app.listen(port, function(erro){
    if(erro){
        console.log("ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
});