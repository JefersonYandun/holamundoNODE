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


//8.-???



//9.- RETSA SIN PARAMETROS Y JSON
//url: http:localhost:3000/resta?n11=20&n22=10
app.get('/resta',(req,res)=>{

    const n1=parseInt(req.query.n11); //N11 Y N22 SON ideitificativos de query algo asi xd
    const n2=parseInt(req.query.n22);
    var resul=0;

    if(n1 > n2 ){
        resul=n1-n2;

    }else{
        resul=n2-n1;

    }
    const resultado={total:resul};
    res.json(resultado);

});


//10. EJERICICO CONEJOS
//url: http:3000/conejos?p=3&

app.get('/conejos',(req,res)=>{

    var pActual=0,pMuere=0,pTotal=0;
    //periodo
    const peri=parseInt(req.query.p);
    //numero de conejos
    const nparejas=parseInt(req.query.nPar);
    //NUMERO DE CRIAS
    const ncrias=parseInt(req.query.nCri);

    //tasa mortalidad;
    const tMort=req.query.tMor;

    for(let i=0;i<=peri;i++){

        if(i==0){
        pActual =nparejas * 2;
        pMuere =pActual*tMort/100;
        pTotal=pActual-pMuere;}
        else{
        numCrias=nParejas*ncrias;
        pActual +=nparejas * 2;
        pMuere =pActual*tMort/100;
        pTotal=pActual-pMuere;
        parejas=pTotal/2;
    }
    const resultados={pAnual:pActual,
                        pMorir:pMuere,
                        pRestante:pTotal,
                        nParejas:parejas,
                        nCrias:numCrias};

            res.json(resultados);
    }
    
});


//hacerle un json arrays y luego consumir en movil


//ejercicio inge
    


//solucion con array

app.get('/conejos', (req, res) => {
    const peri = parseInt(req.query.p);
    const nParejas = parseInt(req.query.nPar);
    const nCrias = parseInt(req.query.nCri);
    const tMort = parseInt(req.query.tMor);

    const resultados = []; 
    let pActual = nParejas * 2; // Declaración y asignación inicial
    let pTotal = pActual;
    let pMuere = 0; // Inicializa pMuere
    let parejas = Math.floor(pTotal / 2); // Inicializa parejas con un valor válido

    for (let i = 1; i <= peri; i++) {
        const numCrias = nParejas * nCrias;
        pActual += numCrias;
        pMuere = pActual * (tMort / 100);
        pTotal = pActual - pMuere;
        parejas = Math.floor(pTotal / 2); // Aquí puedes calcular el valor de parejas

        const resultadoAnual = {
            año: i,
            población: pActual,
            muertos: pMuere,
            población_restante: pTotal,
            parejas: parejas, // Utilización de la variable
            crías: numCrias
        };

        resultados.push(resultadoAnual);
    }

    res.json(resultados);
});



//SERICIO QUE ESCUCHE EL PUERTO 3000


//deber la suma de dos paramteros 