const path = require('path')

// 1.导入html-webpack-plugin这个插件,得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 2.new 构造函数.创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 指定要复制哪个页面
    template: './src/index.html',
    // 指定复制出来的文件名和存放路径
    filename: './index.html'
})


// 使用Node.js中的导出语法,向外导出一个webpack的配置对象
module.exports = {
    // 代表webpack运行的模式,可选值有两个 development和production
    // 开发用development,打包速度快
    // 发布上线用production,体积小
    mode: 'development',
    // entry:'指定要处理那个文件'
    entry: path.join(__dirname, './src/index1.js'),
    // 指定生成的文件要存放到哪里
    output: {
        // 存放到目录
        path: path.join(__dirname, './dist'),
        // 生成的文件名
        filename: 'js/bundle.js'
    },


    // 在开发调试阶段,建议把devtool的值设置为eval-source-map
    // devtool: 'eval-source-map',

    // 在实际发布的时候,把devtool值设置为 nosources-source-map 或直接关闭 SourceMap
    devtool: 'nosources-source-map',


    // 插件的数组,将来webpack在运行时,会加载并调用这些插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        open: true,
        port: 80,
        host: '127.0.0.1'
    },
    module: {
        // 所有第三方文件模块的匹配规则
        rules: [
            // 定义了不同模块对应的loader
            // 文件后缀名的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理.less文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 处理图片文件的loader
            // 如果需要调用的 loader 只有一个,则只传递一个字符串也行,如果有多个 loader ,则必须指定数组
            // 在配置 url-loader 的时候,多个参数之间,使用 & 符号进行分隔
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=100&outputPath=images' },
            // 使用 bable-loader 处理高级的JS语法
            // 在配置 babel-loader 的时候, 程序员只需要把自己的代码进行转换即可;一定要排除  node_modules 目录中的JS文件
            // 因为第三方包中的JS兼容性,不需要程序员关心
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },

        ]
    },
    resolve: {
        alias: {
            // 告诉 webpack ,程序员写的代码中, @ 符号表示 src 这一层目录
            '@': path.join(__dirname, './src')
        }
    }
}