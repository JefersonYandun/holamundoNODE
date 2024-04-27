//LLAMAR AL PROTOCOLO HTTP
var http=require('http');

//A TRAVES DEL PORTOOCLO CREAMOS UN SERVIDOR Y LO ALMACENAMOS EN UN SERVER
var server=http.createServer()


//METODO CON EL QUE SE PUEDE CONFIGURAR lo siguiente:
function mensaje(peticion,resp){
    //1. el estadp del servidor a traves de un texto
    resp.writeHead(200,{'content-type':'text/plain'});
    //2. el mensjae a mostrar
    resp.writeHead("YA MANDEN A LAS CASAS !!!");
    //3. Finalizar respuesta
    resp.end();

}
//INICIAR el servido cuando exista una peticion y se muestre el mensajeque personalizamos antes llama a la funcion
server.on('request', mensaje);

//Una vez es uche la peticion salga por el puerto 3000 y me idnique en consola 
server.listen(3000,function(){
    console.log('La aplicacion esta corriendo en un clienten');
})
