const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'angular', 'lodash'
];

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: 'build/'
    },
    devServer: {
        compress: true,
        stats: "errors-only",
        historyApiFallback: true,
        host: 'localhost', // Defaults to `localhost`
        port: 8081, // Defaults to 8080
    },
    module: {
        rules: [{
                test: [/\.js$/],
                exclude: [/node_modules/],
                loader: 'babel-loader'
            }, {
                test: [/\.css$/],
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                }),
            },
            {
                test: [/\.(jpe?g|png|gif|svg)$/],
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 40000 // Create a new file if file size > 40kb else save the image inside bundle.js using base64
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "style.css"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','manifest']
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template:'src/index.html'
        })
    ]
};

module.exports = config;