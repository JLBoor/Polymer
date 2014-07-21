var Hapi = require('hapi'),
    swig = require('swig');

swig.setDefaults({ cache: false });

var serverOptions = {
    views: {
        engines: {
            'html': {
                module: swig,
                compileMode: 'sync', // engine specific
                isCached: false
            }
        },
        compileMode: 'async', // global setting
        isCached: false
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