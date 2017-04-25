const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcRoot = path.resolve(__dirname, 'src');
const appRoot = path.resolve(srcRoot, 'app');

module.exports = (env) => {

    const isDev = env == 'development';

    return {
        context: path.resolve(__dirname),
        entry: {
            main: './index.web.js',
            vendor: [
                'react', 'react-dom'
            ]
        },
        output: {
            path: path.resolve(__dirname, './www'),
            filename: isDev ? 'js/[name].bundle.js' : 'js/[name].[hash].bundle.js',
            sourceMapFilename: isDev ? 'js/[name].bundle.map' : 'js/[name].[chunkhash].bundle.map',
            chunkFilename: isDev ? 'js/[id].chunk.js' : 'js/[id].[chunkhash].chunk.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    query: {
                        "presets": [
                            ["es2015", {"modules": false}],
                            "stage-2",
                            "react"
                        ],
                        "plugins": []
                    },
                    exclude: [
                        /node_modules/,
                    ],
                },
            ]
        },
        resolve: {
            extensions: [".js", ".jsx"],
            modules: [
                appRoot,
                'node_modules'
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, "www"),
            port: 2200,
            compress: true,
            publicPath: '/',
            stats: "minimal"
        },
        stats: "minimal",
        performance: {
            hints: false
        },
        devtool: false,
        plugins: [
            new CleanWebpackPlugin(['www']),
            new CopyWebpackPlugin([
                {from: './src/app/web/index.html'},
                {from: './src/assets', to: './assets'},

            ]),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new HtmlWebpackPlugin({
                template: path.resolve(appRoot + '/web', 'index.html'),
                chunksSortMode: 'dependency'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'js/[hash].vendor.js',
                minChunks: Infinity,
            }),
            new webpack.DefinePlugin({
                process: {
                    env: {
                        NODE_ENV: isDev ? '"development"' : '"production"'
                    }
                }
            }),
        ].concat(
            !isDev
                ? // production only plugins
                [
                    new webpack.optimize.UglifyJsPlugin({
                        compress: {
                            warnings: false
                        }
                    }),
                ]
                :// dev only plugins
                []
        )
    }
};
