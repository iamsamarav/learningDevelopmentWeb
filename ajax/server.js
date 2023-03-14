const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //é o provedor de todos os arquivos estáticos
app.use(bodyParser.urlencoded({ extended: true})) //transforma o submit do form em objeto
app.use(bodyParser.json()) //transforma dados em objetos

app.listen(8081, () => {
    console.log('Executando')
})