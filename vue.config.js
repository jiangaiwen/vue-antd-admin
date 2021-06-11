'use strict'
const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin")

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // publicPath: './', // 打包app时放开该配置
    lintOnSave: false,
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度, true的话打包后可调试源码
    devServer: {
        open: true,
        port: 3000,
        proxy: { // 配置跨域
            '/api': {
                target: 'http://localhost:3000',  //打包后接口地址
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    
    configureWebpack: config => {
        // 生产环境取消 console.log
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@com', resolve('src/components'));

        // 生产环境，开启js\css压缩
        if(process.env.NODE_ENV === 'production') {
            config.plugin('compressionPlugin').use(new CompressionPlugin({
                test: /\.(js|css|less)$/, // 匹配文件名
                threshold: 10240, // 对超过10k的数据压缩
                deleteOriginalAssets: false // 不删除源文件
            }))
        }
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    /* less 变量覆盖，用于自定义 ant design 主题 */
                    'primary-color': '#1890FF',
                    'link-color': '#1890FF',
                    'border-radius-base': '4px',
                },
                javascriptEnabled: true
            }
        }
    }
}