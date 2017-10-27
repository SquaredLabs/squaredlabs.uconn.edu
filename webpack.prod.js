const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = merge(common, {
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: '"production"' // Why double quotes? https://github.com/thgh/vuejs-templates-rollup/issues/1#issuecomment-255096585
            }
        }),
        new MinifyPlugin({}, 
        {
            comments: false
        })
    ]
});