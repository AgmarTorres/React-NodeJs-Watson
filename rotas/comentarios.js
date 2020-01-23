const express = require('express')
const router = express.Router()

router.get('/comentarios/:id',(req, res)=>{
    res.json({
        conteudo: 'bastante',
        autor: 'Agmar Torres'
    })
})

module.exports = router