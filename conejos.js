//constatnte que llama al framework
//const express = require('express')

//const app = express()
//SERVICIO WEB DE TIPO GET
http://localhost:3000/

///app.get('/', function (req, res){

  //  console.log("El SERVICIO  esta corriendose")
//ENVIA 

const express = require('express');
const app = express();
const port = 3000;

// Ejercicio de conejos
app.get('/conejos', (req, res) => {
    const peri = parseInt(req.query.p);
    const nParejas = parseInt(req.query.nPar);
    const nCrias = parseInt(req.query.nCri);
    const tMort = parseInt(req.query.tMor);

    const resultados = []; 
    let pActual = nParejas * 2;
    let pTotal = pActual;
    let pMuere = 0;
    let parejas = Math.floor(pTotal / 2);

    for (let i = 1; i <= peri; i++) {
        const numCrias = parejas * nCrias;
        pActual += numCrias;
        pMuere = pActual * (tMort / 100);
        pTotal = pActual - pMuere;
        parejas = Math.floor(pTotal / 2);

        const resultadoAnual = {
            año: i,
            población: Math.round(pActual), // Redondear valores
            muertos: Math.round(pMuere),
            población_restante: Math.round(pTotal),
            parejas: Math.floor(parejas), // Parejas redondeadas
            crías: Math.round(numCrias)
        };

        resultados.push(resultadoAnual);
    }

    res.json(resultados);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${3000}`);
});
//deber la suma de dos paramteros 