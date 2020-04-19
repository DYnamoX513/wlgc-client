const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    // todo: 跨域访问设置 vue-cli3.0 axios
    devServer:{
        port: 8989, // vue port
        proxy:{
            '/api':{
                target: 'http://127.0.0.1:8888/api',    // api base url
                changeOrigin: true,
                ws: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}