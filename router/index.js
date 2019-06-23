//封装路由模块的目的 是为了 抱枕每一个模块的职能的单一性
const express = require('express')
const router = express.Router()


//导入自己的业务处理模块
const ctrl = require('../controller/index.js')

//用户请求的项目首页
router.get('/', ctrl.showIndexPage)

//把对象暴露出去

module.exports = router