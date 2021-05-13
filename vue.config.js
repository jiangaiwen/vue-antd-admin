'use strict'
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度, true的话打包后可调试源码
    devServer: {
        open: true,
        port: 3000,
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('components', resolve('src/components'));
    }
}