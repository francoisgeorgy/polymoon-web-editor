const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackAutoInject = require("webpack-auto-inject-version");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {InjectManifest} = require('workbox-webpack-plugin');
const path = require('path');


module.exports = {
    entry: {
        app_bundle: "./src/main.js",
        print_bundle: "./src/print/print.js"
    },
    module: {
        rules: [
            {
                test: /\.woff$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 50000
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: "url-loader?limit=100000"
            }
        ]
    },
    resolve: {
        // extensions: ['js', 'ts'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            // '@assets': path.resolve(__dirname, 'src/components'),
            '@midi': path.resolve(__dirname, 'src/shared/midi'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@utils': path.resolve(__dirname, 'src/shared/utils'),
            '@model': path.resolve(__dirname, 'src/shared/model'),
            '@device': path.resolve(__dirname, 'src/polymoon'),
            // '@device': path.resolve(__dirname, 'src/enzo/model'),
            // ...etc
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        }),
        new WebpackAutoInject({
            components: {
                AutoIncreaseVersion: false
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
            {from: "./public/midi.html"},
            {from: "./src/serviceWorker.js"},
            {from: "./public/manifest.json"},
            {from: "./public/print/preset-template.html", to: "templates"},
            {from: "./public/css/midi.css", to: "css"},
            {from: "./public/img/favicon-16x16.png"},
            {from: "./public/img/favicon-32x32.png"},
            {from: "./public/img/apple-touch-icon.png"},
            {from: "./public/img/icon-192x192.png"},
            {from: "./public/img/icon-512x512.png"}
        ]}),
        new InjectManifest({
            swSrc: './src/workboxSetup.js',
            maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
        }),
        new HtmlWebpackPlugin({
            chunks: ["app_bundle"],
            hash: true,
            inject: "head",
            template: "./src/index.html",
            filename: "./index.html" //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            chunks: ["print_bundle"],
            hash: true,
            inject: "head",
            template: "./src/print/print.html",
            filename: "./print.html" //relative to root of the application
        })
    ],
    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000
    }
};
