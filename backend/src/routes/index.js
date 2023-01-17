const indexController = require('../controllers/index');

exports.index = (server) => {

    server.route({
        method: 'GET',
        path: '/',
        handler: indexController.indexSearch
    });

}