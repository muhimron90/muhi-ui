const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../../src/index.js'),
    },

    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '../../dist/'),
        port: 8080,
        publicPath: '/',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist/'),
        chunkFilename: '[id].js',
        publicPath: '/',
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
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1, sourceMap: true },
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
            template: path.resolve(__dirname, '../../src/index.html'),
            favicon: path.resolve(__dirname, '../../src/assets/favicon.ico'),
            // template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].[chunkhash].css',
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    devtool: 'source-map',
    optimization: {
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: 'app' && /\.css$/ && /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    priority: 1,
                    chunks: 'all',
                },
            },
        },
    },
}
