const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = function override(config) {
    config.plugins.push(
        new NodePolyfillPlugin({
            excludeAliases: ['console']
        })
    )

    return config
}