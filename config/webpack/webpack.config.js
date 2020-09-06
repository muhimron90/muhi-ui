const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '../../src/index.js'),
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '../../dist/'),
        port: 8080,
        publicPath: '/',
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../../dist/'),
        chunkFilename: '[id].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: ' Muhi Ui',
            body: 'Welcome',
            template: path.join(__dirname, '../../src/index.html'),
            favicon: path.resolve(__dirname, '../../src/assets/favicon.ico'),
            // template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all',
                },
            },
        },
    },
}
