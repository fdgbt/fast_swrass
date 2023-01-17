'use strict';

const Hapi = require('@hapi/hapi');

const indexRoutes = require('./routes/index');
const testRoutes = require('./routes/test');

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });

    indexRoutes.index(server);
    testRoutes.test(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
