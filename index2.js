//constatnte que llama al framework
const express = require('express')

const app = express()
//SERVICIO WEB DE TIPO GET
http://localhost:3000/

app.get('/', function (req, res){

    console.log("El SERVICIO  esta corriendose")
//ENVIA 

res.send(' ADIOS MUNDO')
console.log("El SERVICIO  esta corriendose")
});


//2.- SERVICIO WEB DE TIPO GET
app.get('/a',function(req,res){
    res.send('SIUU')

});

//3. definifr un parametros en una url
//http://localhost:3000/suma/10

app.get('/suma/:n1',(req,res)=>{
    const num1=parseInt(req.params.n1);
    var tot=11+num1;
    const json={
        
    }
    res.send(tot+'')
});

//4. definifr un parametros en una url
//http://localhost:3000/suma/5/8

app.get('/suma/:n1',(req,res)=>{
    const num1=parseInt(req.params.n1);
    var tot=11+num1;
    const json={
        resultado:tot
        
    };
    res.send(tot+'')
});


//5.- SUMA DE DOS NUMEROS USANDO PARAMETROS URL
app.get('/suma/:n1/:n2',(req,resp)=>{
    const n1=req.params.n1;
    const n2=req.params.n2;
    var suma=n1+n2;


    resp.send(suma);
})

//6.- RESTA DE DOS NUMEROS USANDO PARAMETROS URL
////localhost:3000/resta/10/3
app.get('/resta/:n1/:n2',(req,resp)=>{
    const n1=req.params.n1;
    const n2=req.params.n2;
    var resta=n1-n2;
    const texto={respuesta:resta};
    resp.json(texto);

    resp.send(resta);
})

//7.- SE CAPTURA LA URL PERO NO ESTA DEFINIDO EL PARAMETRO
//http://localhost:3000/nombre=PAPADIO
app.get('/nombre',(req,res)=>{

    const datoObtener=req.query.name;
    res.send('HOLA'+''+datoObtener)
    
});


//7.- SE suma dos numeros sin definir parametros
//http://localhost:3000/sumar?n1=55&n2=69
app.get('/sumar',(req,res)=>{

    const n1Obtener=parseInt(req.query.n1);
    const n2Obtener=parseInt(req.query.n2);
    var respuesta=n1Obtener + n2Obtener;
    res.send('HOLA'+''+respuesta)
    
});

//SERICIO QUE ESCUCHE EL PUERTO 3000
app.listen(3000)

//deber la suma de dos paramteros 