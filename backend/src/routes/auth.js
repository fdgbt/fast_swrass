const authController = require('../controllers/auth');

exports.auth = (server) => {

    server.route({
        method: 'POST',
        path: '/login',
        handler: authController.postLogin
    });

}