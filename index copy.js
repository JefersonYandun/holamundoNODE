//USO PROTOCOLO HTTP
var http=require('http');
//CREACIÓN DE UN SERVIDOR USANDO HTTP
var server=http.createServer();


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