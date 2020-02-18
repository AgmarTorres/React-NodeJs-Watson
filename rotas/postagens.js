const express = require('express')
const router = express.Router()
const ibmdb = require('ibm_db')
router.get('/postagens',(req, res)=>{

    var ibmdb = require('ibm_db');
    
    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;UID=pwd90825;PWD=rq@qwl0vjsvr16d3;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
        if (err) return console.log(err);
        
        conn.query('select * from PWD90825.POSTAGENS', function (err, data) {
            if (err) console.log(err);
            else{console.log(data);
                res.send(data)
            }

            conn.close(function () {
            console.log('done');
            });
        }); 
    });

})

router.get("/postagens/nova", 
   function (req,res){
        ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;UID=pwd90825;PWD=rq@qwl0vjsvr16d3;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
            if(err){
                console.log({erro: err, mensagem: "conexao falhou"})
            }else{
                console.log(req.query.titulo);
                conn.query(`INSERT INTO PWD90825.POSTAGENS (TITULO,CONTEUDO,AUTOR) VALUES('${req.query.titulo}','${req.query.conteudo}','${req.query.autor}') `,(err,data) =>{
                    if(err){
                        console.log({erro: err, mensagem: 'Query Inser falou'})

                    }else{
                        console.log(data)
                        res.send(data)
                    }
                })
            }
        
            conn.close(function () { 
                    console.log('done');
            });
        } 
    )}
)
module.exports = router