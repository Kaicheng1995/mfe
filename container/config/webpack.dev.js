const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');


// 这里assaign成了一个常量了，没有直接exports
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

// merge 两个config，放在后面的devConfig 会覆盖前面的，当存在冲突时
module.exports = merge(commonConfig, devConfig);