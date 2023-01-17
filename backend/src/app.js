'use strict';

const Hapi = require('@hapi/hapi');
const bcrypt = require('bcrypt');

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const testRoutes = require('./routes/test');

const Users = require('./models/users');

const validate = async (request, username, password) => {

    console.log("username:", username, "password", password);

    const user = Users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }

    const isValid = await bcrypt.compare(password, user.password);
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
        "routes": {
            "cors": {
                "origin": ["http://localhost:3000"],
                "headers": ["Accept", "Content-Type"],
                "additionalHeaders": ["X-Requested-With"]
            }
        }
    });

    await server.register(require('@hapi/basic'));

    server.auth.strategy('simple', 'basic', { validate });

    indexRoutes.index(server);
    authRoutes.auth(server);
    testRoutes.test(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
