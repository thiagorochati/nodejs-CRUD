const express = require("express");
const app = express();

//Importação dos Controllers
const clienteController = require("./controller/cliente/Cliente");

//Informo que irei utilizar o EJS
app.set('view engine', 'ejs');

//Informo que iremos utilizar arquivos estatico
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render('index')
  })

//Uso o controller de cliente  
app.use("/", clienteController);
  
app.listen(4000, function(erro) {
  if (erro) {
    console.log("Ocorreu um erro ao iniciar o servidor")
  } else {
    console.log("Servidor inicializado com sucesso")
  }
})
