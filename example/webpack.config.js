var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.icu/,
            loader: 'icurb-loader'
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        historyApiFallback: true,
        noInfo: false
    }
}

