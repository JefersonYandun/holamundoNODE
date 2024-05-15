const express = require('express');
const https = require('https');
const app = express();
const port = 3000;
const listanombres=[];
let currentId = 1; // Contador para el ID autoincrementable

//METODO GET
app.get('/hola',(req,res)=>{
    res.json(listanombres);


});



//url ultima para mandar datos con una estructura definida
//localhost:3000/hola?id=1&name=MR%20WHITE&edad=99



app.post('/hola',(req,res)=>{
    
    const nombre=req.query.name;
    const edad=req.query.edad;

    // Creamos un nuevo objeto con el id autoincrementable
    const nuevoNombre = {
        id: currentId++, // Incrementamos el ID y lo usamos
        name: nombre,
        edad: edad
    };

    // Añadimos el nuevo objeto a la lista de nombres
    listanombres.push(nuevoNombre);

    // Enviamos una respuesta con un mensaje de éxito y los datos del nuevo objeto
    res.send({
        message: 'Se almacenó el nombre',
        data: nuevoNombre
    });


});


//METODO PUT
app.put('/hola',(req,res)=>{
    const id = parseInt(req.query.id, 10);
    const nombre = req.query.name;
    const edad = req.query.edad;



    const itemIndex = listanombres.findIndex(item => item.id === id);

    if (itemIndex === -1) {
        return res.status(404).send({ message: 'Nombre no encontrado' });
    }

    if (nombre) {
        listanombres[itemIndex].name = nombre;
    }

    if (edad) {
        listanombres[itemIndex].edad = edad;
    }

    res.send({
        message: 'Nombre actualizado',
        data: listanombres[itemIndex]
    });
    //no funka
    /*
    const c=hola.find(l=>l.id===num);
    
    if(c){
        hola.nombre=name;
        hola.edad=edad;
        res.json({message:'Datos',datos})

    }
*/

});


app.listen(3000,function(){
    console.log('La aplicacion esta corriendo en un cliente SI ESCUCHA');
})

//url utilizada antes de estructurar json
//localhost:3000/hola?nombre=MESSI&apellido=CR7&EDAD=37%20AÑOS
//captura lo que sea en la url


