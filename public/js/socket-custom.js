var socket = io();

// Escuchar

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');

});

//Escuchar información

socket.on('enviarMensaje', function(resp) {
    console.log(resp.usuario + ', ' + resp.mensaje);
});

//Enviar información

socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola Mundo'

});

//Enviar información - Retroalimentación

socket.emit('retroalimentacion', {
    usuario: 'Andres',
    mensaje: 'Hola Mundo'

}, function(res) {
    console.log('Respuesta server: ', res.resp);

});