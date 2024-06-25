const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    entry: './nutribuilder/static/js/App.js',
    output: {
        path: path.resolve(__dirname, 'nutribuilder/static/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'nutribuilder/static/js'),
            watch: true,
        },
        compress: true,
        port: 9000,
        proxy: [
            {
                context: () => true,
                target: 'http://localhost:8000',
            }
        ]
    },
    mode: 'production', // Set mode to 'production'
    performance: {
        maxAssetSize: 300000, // Adjust the asset size limit as needed
        maxEntrypointSize: 300000,
        hints: 'warning',
    },
    optimization: {
        minimize: true, // Enable minimization
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true, // Optionally remove console logs
                    },
                },
            }),
        ],
    },
    devtool: false, // Disable source maps for production
};