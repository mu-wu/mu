const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

// const moment = require('moment')


// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
    // 设置模板页面的存放路径
app.set('views', './views')

//注册解析表单数据的中间件
app.use(bodyParser.urlencoded({ extended: false }))

//把 node_moldules文件夹，托管为静态资源目录
app.use('/node_modules', express.static('node_modules'))

//导入router/index.js路由模块
const router1 = require('./router/index.js')
app.use(router1)
    //导入用户相关的路由模块
const router2 = require('./router/user.js')
app.use(router2)


//使用 循坏的方式。进行路由的自动注册
fs.readdir(path.join(__dirname, '/router'), (err, filenames) => {
    if (err) return console.log('读取router目录中的路由失败')
        //循环router目录下每一个文件夹
    filenames.forEach(fname => {
        // console.log(path.join(__dirname, './router', fname));

        //每循环一次 就拼接处一个完整的模块地址
        //然后使用require 导入这个路由模块
        const router = require(path.join(__dirname, './router', fname))
        app.use(router)
    })

})


app.listen(3001, () => {
    console.log("服务器运行成功……")
})