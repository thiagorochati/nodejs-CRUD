const express = require("express");
const session = require("express-session");
const authMiddleware = require("./middlewares/authMiddleware");
const flash = require("connect-flash");
const app     = express();

const clienteRoutes = require("./routes/clienteRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Configurando a nossa seção
app.use(session({
  secret: "554fr71RTGH4521#d@qqA", 
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

// Middleware para deixar flash disponível no EJS
app.use((req, res, next) => {
  res.locals.error_msg = req.flash("error_msg");
  res.locals.success_msg = req.flash("success_msg");
  next();
});

// Middleware global para passar user logado para views
app.use((req, res, next) => {
  res.locals.usuarioLogado = req.session.usuario; 
  next();
});

app.get("/", authMiddleware, (req, res) => {
  res.render("index"); 
});

// Rotas
app.use("/", clienteRoutes);
app.use("/", usuarioRoutes);

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));