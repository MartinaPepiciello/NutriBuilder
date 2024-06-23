const path = require('path');

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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
