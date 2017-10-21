const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/"
                        }
                    }
                ]
            }, 
            {
                test: /\.(html|htm)$/,
                use: "html-loader"
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "resolve-url-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "env"
                            ],
                            plugins: [
                                "transform-runtime",
                                "transform-class-properties"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("assets/[name].[ext]"),
        new HTMLWebpackPlugin({
            template: "src/index.html"
        })
    ],
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
    }
};