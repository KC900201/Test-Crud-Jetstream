const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            // add ziggy path
            ziggy: path.resolve('vendor/tightenco/ziggy/src/js/route.js'),
        },
    },
};
