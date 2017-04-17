var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: {
        site: ['./wwwroot/js/site.js', './scripts/myviewmodel.ts']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot/dist/')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
