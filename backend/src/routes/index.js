const indexController = require('../controllers/index');

exports.index = (server) => {

    server.route({
        method: 'POST',
        path: '/search',
        handler: indexController.postSearch
    });

}