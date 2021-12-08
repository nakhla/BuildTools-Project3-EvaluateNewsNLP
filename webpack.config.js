const path =  require('path')

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}