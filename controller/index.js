//展示首页页面
const showIndexPage = (req, res) => {
    //使用render 函数之前，一定保证安装和配置了
    res.render('index.ejs', {})
}

module.exports = {
    showIndexPage
}