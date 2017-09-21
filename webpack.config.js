const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
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
        })
    ]
};

module.exports = config;