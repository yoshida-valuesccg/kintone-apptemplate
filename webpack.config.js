const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
    {
        mode: 'production',
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: 'env'
                        }
                    }
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.json$/,
                    type: 'javascript/auto',
                    use: 'json-loader'
                },
                {
                    test: /\.(gif|jpg|jpeg|tiff|png)$/,
                    use: 'url-loader'
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: 'url-loader'
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].css'
            })
        ],
        // devtool: 'source-map'
    }
];
