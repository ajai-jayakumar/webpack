const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: [/\.js$/],
            exclude: [/node_modules/],
            loader: 'babel-loader'
        }, {
            test:[/\.css$/],
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            }),
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "style.css"
        })
    ]
};

module.exports = config;