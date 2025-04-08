const path = require('path');

module.exports = {
    chainWebpack: config => {
        config.resolve.extensions
            .add('.ts')
            .add('.tsx')
            .add('.js')
            .add('.vue');

    },
};
