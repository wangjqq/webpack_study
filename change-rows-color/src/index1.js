// 1.使用ES6导入语法,导入jQuery
import $ from "jquery";
// 导入样式(在webpack中,一切皆模块,都可以通过ES6语法进行导入和使用)
// 如果某个模块中, 使用from接收到的成员为undefined, 则没必要进行接收
import './css/index.css'
import './css/index.less'

// 导入src/js/test/info.js
import './js/test/info.js'

// 1.导入图片,得到图片文件
import logo from './images/logo.png'
// 2.给 img 标签的 src 动态赋值
$('.box').attr('src', logo)

// 2.定义jQuery的入口函数
$(function () {
    // 3.实现奇偶行变色
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'blue')
})

// 定义装饰器函数
function info(target) {
    target.info = 'Person info.'
}


// 定义一个普通的类
@info
class Person { }

console.log(Person.info);  