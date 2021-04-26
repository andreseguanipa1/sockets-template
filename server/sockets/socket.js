const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado');


    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {

        client.emit('enviarMensaje', data)
        client.broadcast.emit('enviarMensaje', data)

    });

    //Mensaje retroalimentación

    client.on('retroalimentacion', (data, callback) => {

        console.log(data);

        if (!data.usuario) {
            callback({ resp: 'Error!' });

        } else {
            callback({ resp: 'Todo bien!' });
        }

    });

})