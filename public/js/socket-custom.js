var socket = io();

// Escuchar

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');

});

//Enviar información - Retroalimentación

socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola Mundo'

}, function(res) {
    console.log('Respuesta server: ', res.resp);

});

//Escuchar información

socket.on('enviarMensaje', function(resp) {
    console.log(resp.usuario + ', ' + resp.mensaje);
});