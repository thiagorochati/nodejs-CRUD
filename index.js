const express = require("express");
const app = express();

//Informo que irei utilizar o EJS
app.set('view engine', 'ejs');

//Informo que iremos utilizar arquivos estatico
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render('index')
  })

app.get("/cliente", function(req, res) {
    res.render('cliente/index')
  })  

app.get("/cliente/new", function(req, res) {
    res.render('cliente/new')
  })  
  

app.listen(4000, function(erro) {
  if (erro) {
    console.log("Ocorreu um erro ao iniciar o servidor")
  } else {
    console.log("Servidor inicializado com sucesso")
  }
})
