const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    //使用render 函数之前，一定保证安装和配置了
    res.render('index.ejs', {})
})

//把对象暴露出去

module.exports = router