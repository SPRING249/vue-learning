const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    
    //关闭语法检查
    lintOnSave: false,
    
    //跨域
    //开启代理服务器:不能配置多个代理，
    // devServer: {
    //     proxy: "http://localhost:5000"
    // },
    //第二种方式：
    devServer: {
        proxy: {
            '/jojo': { // 匹配所有以 '/api1'开头的请求路径
                target: 'http://localhost:5000',// 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: {'^/jojo': ''},
                // ws: true, //用于支持websocket,默认值为true
                // changeOrigin: true //用于控制请求头中的host值,默认值为true
            },
            '/atguigu': { // 匹配所有以 '/api2'开头的请求路径
                target: 'http://localhost:5001',// 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: {'^/atguigu': ''}
            }
        }
    }

// changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
// changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080

    
})
