//constatnte que llama al framework
const express = require('express')

const app = express()
//SERVICIO WEB DE TIPO GET
app.get('/', function (req, res){

    console.log("El SERVICIO  esta corriendose")
//ENVIA 

res.send(' ADIOS MUNDO')
console.log("El SERVICIO  esta corriendose")
})


//2.- SERVICIO WEB DE TIPO GET
app.get('/a',function(req,res){
    res.send('SIUU')

})

//SERICIO QUE ESCUCHE EL PUERTO 3000
app.listen(3000)