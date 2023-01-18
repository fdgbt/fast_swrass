const indexController = require('../controllers/index');

exports.index = (server) => {

    server.route({
        method: 'POST',
        path: '/search',
        handler: indexController.postSearch
    });

    server.route({
        method: 'POST',
        path: '/wookie',
        handler: indexController.postWookie
    });

}