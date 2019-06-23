const express = require('express')
const app = express()

// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
    // 设置模板页面的存放路径
app.set('views', './views')


app.use('/node_modules', express.static('node_modules'))


app.get('/', (req, res) => {
    //使用render 函数之前，一定保证安装和配置了
    res.render('index', { nam: 'xh', age: 18 })
})


//注册
app.get('/register', (req, res) => {
    res.render('./user/register.ejs', {})
})


//登录
app.get('/login', (req, res) => {
    res.render('./user/login.ejs', {})
})


//注册新用户
app.post('./register', (req, res) => {
    //完成注册的业务逻辑

    //1接受前端的发送的post请求信息


    res.send({ msa: 'ok', status: '200' })


})


app.listen(3001, () => {
    console.log("服务器运行成功……")
})