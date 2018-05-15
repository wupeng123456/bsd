var express = require('express')
var bodyParse = require('body-parser')
var multer = require('multer')
var fs = require('fs')

var app = express()
var form = multer()
// 创建 application/x-www-form-urlencoded 编码解析
// 设置静态文件夹
app.use(express.static('pubilc'))
app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())
// 设置登录接口
app.post('/login', function(request, response) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Content-Type", "application/json;charset=utf-8");
    if (request.body.data) {
        console.log('JSON数据读取成功')
    } else {
    //不能正确解析json 格式的post参数
    var body = '', jsonStr;
    request.on('data', function (chunk) {
        body += chunk; //读取参数流转化为字符串
    });
    request.on('end', function () {
        //读取参数流结束后将转化的body字符串解析成 JSON 格式
        try {
            jsonStr = JSON.parse(body);
        } catch (err) {
            jsonStr = null;
        }
        // 数据读取到了，判断是否是注册后的数据，判断是否存在文件夹
        fs.exists('pubilc/data', function(result) {
            if (result) {
                console.log('文件夹存在')
                // 读取文件
                fs.readFile('pubilc/data/login.json', function(error, data){
                    if (data) {
                        var value = data.toString()
                        // 获取到读取的数据转成字符串
                        value = JSON.parse(value)
                        // 字符串转为对象
                        var login = value.login
                        // 声明返回的数据
                        var redata = {
                            array: login,
                            statis: false,
                            data: jsonStr,
                            errormessage: '',
                        }
                        // 获取login数据
                        for (var i = 0; i < login.length; i++) {
                            // 判断password是否相同
                            if (login[i].password === jsonStr.password) {
                                // 判断userName是否相同
                                if (login[i].userName == jsonStr.userName) {
                                    redata.errormessage = '登陆成功'
                                    redata.statis = true
                                } else {
                                    redata.errormessage = '用户名不同'
                                }
                            } else {
                                redata.errormessage = '密码不同'
                            }
                        }
                        // 循环对象数据是否相同
                        // 数据相同时返回登陆状态
                        // 数据不同返回不同的登陆状态
                  
                        response.send(redata)
                    } else {
                        console.log('login文件不存在', error)
                    }
                })
            } else {
                console.log('文件夹不存在')
            }
        })
    });
    }

})
// 设置端口
app.listen(5000, function(){
    console.log('服务器正在运行，请输入localhost:5000')
})