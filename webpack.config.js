'use strict';

const webpack = require('webpack');

module.exports = {
    context: __dirname + '/example',
    entry: {
        app: "./index.js"
    },
    output: {
        path: __dirname + "/example",
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["es2015", "react"] }
                }],
            },
        ],
    },
    devServer: {
        contentBase: __dirname + "/example",
    }
};
