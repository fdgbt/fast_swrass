const indexController = require('../controllers/index');

exports.index = (server) => {

    server.route({
        method: 'GET',
        path: '/',
        handler: indexController.indexSearch
    });

    server.route({
        method: 'GET',
        path: '/index',
        handler: indexController.indexSearch
    });

    server.route({
        method: 'GET',
        path: '/home',
        handler: indexController.indexSearch
    });

}