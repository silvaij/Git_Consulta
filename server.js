const express = require('express')
const app = express()

app.get('/', (req, res) => {
   res.status(200).send('Novo repositório clonado.')
})

app.listen(4000, () => {
   console.log('Servidor/API inicializado na porta 4000')
})