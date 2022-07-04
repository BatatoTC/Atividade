const express = require("express");
const app = express();
const porta = 3000;
const path = require("path");
const usuarioRoute = require('./routes/UsuarioRoute');
const animeRoute = require('./routes/AnimeRoute');

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extends: true }));

app.set('view engine', 'ejs');

app.use('/usuario', usuarioRoute);
app.use('/anime', animeRoute);

app.listen(porta, () => {
    console.log("Servidor rodando na porta 3000.");
});