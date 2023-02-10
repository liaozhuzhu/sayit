const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack')
const dotenv = require('dotenv')

dotenv.config();



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'popup.html',
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: "public"
                },
            ]
        }),
        // fix the process is not defined error
        new webpack.EnvironmentPlugin( { ...process.env } )
    ],
};