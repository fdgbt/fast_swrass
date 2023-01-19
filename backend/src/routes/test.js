exports.test = (server) => {

    server.route({
        method: 'GET',
        path: '/test',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/test_swapi',
        handler: async (request, h) => {
            try {

                const result = await fetch('https://swapi.dev/api/planets/1/')

                return result.json();

            } catch (err) {
                console.log("error /test_swapi:", err);
                return err;
            }
        }
    });

}