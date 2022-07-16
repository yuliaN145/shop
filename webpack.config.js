const webpack = require('webpack');
const path = require('path');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const config = {
        mode: isProduction ? 'production': 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        resolve: {
            extensions: ['.ts', '.js']
          },
        entry: ['./src/index.ts', './src/sass/global.scss'],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'script.js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-typescript']
                        }
                    }
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader, 'css-loader','sass-loader' 
                    ],
                }, 
                {
                    test: /\.(png|jpg|svg|gif)$/i,
                    use: [
                            'file-loader'
                    ],
                },
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
            ]
        },

        plugins: [
            //new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new EslintPlugin({ extensions: 'ts' }),
        ]
    }

    return config;
}

