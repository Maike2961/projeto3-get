//importando o app do arquivo app.js
const app = require('./app')

require('dotenv').config({path:"variables.env"})

console.log(process.env.UNICSUL)
console.log("eu me chamo " +  process.env.NOME  +  " tenho "  +  process.env.IDADE  + " de idade")
//configurando o servidor 
//app.set("port,3000");
app.set('port', process.env.PORT || 7777 || 5132 || 666)
const server = app.listen(app.get('port'),()=>{
    console.log("servidor rodando na porta,"+server.address().port)
})