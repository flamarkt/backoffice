const config = require('flarum-webpack-config');

const backofficeConfig = {
    ...config(),
    entry: {
        'backoffice': './backoffice.ts',
    },
};

// Use a named module because we will inject this file at the top of the assets without a wrapping extension
backofficeConfig.output.library = "flarum.extensions['flamarkt-backoffice']";

module.exports = [
    config(),
    backofficeConfig,
];
