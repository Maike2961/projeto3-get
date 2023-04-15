//
const express = require("express");


//tratativa das rotas com express - router
const router = express.Router();

//criar rota raiz
router.get("/", (req, res)=>{
    res.send("ola mundo")
});

router.get("/rota1", (req, res)=>{
    res.send("ola mundo unicsul - rota 1")
});

router.get("/rota2", (req, res)=>{
    res.send("perdeu vacilao")
});

//invocando o uso do app com '/'
const app = express();
app.use('/', router);

//exportando app.js
module.exports= app;

