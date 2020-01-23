const express = require('express')
const router = express.Router()

router.get('/postagens',(req, res)=>{
    res.json({
        titulo: 'primeiro post',
        conteudo: 'era uma vez',
        autor: 'Agmar Torres'
    })
})

module.exports = router