const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {

    const env = dotenv.config().parsed;


    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        mode: 'production', // TODO condicionar a variable de entorno
        entry: [
            './src/index.tsx',
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'main.js'
        },
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader'
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [{
                        loader: 'file-loader',
                    }, ],
                },
            ]
        },
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new webpack.DefinePlugin(envKeys),
            new webpack.SourceMapDevToolPlugin({})
        ],
        performance: {
            hints: process.env.NODE_ENV === 'production' ? "warning" : false
        },
        devServer: {
            open: true
        }

    }
}