var Hapi = require('hapi');


var serverOptions = {
    views: {
        engines: {
            'html': {
                module: require('swig'),
                compileMode: 'sync' // engine specific
            }
        },
        compileMode: 'async' // global setting
    }
}


// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000, serverOptions);

// Add the route
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('public/index');
    }
});

server.route({
    method: 'GET',
    path: '/bower_components/{path*}',
    config: {
        handler: {
            directory: { path: './public/bower_components' }
        },
        app: {
            name: 'bower'
        }
    }
});


// Start the server
server.start();