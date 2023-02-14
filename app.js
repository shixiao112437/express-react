const config = require('./config')
const express = require('express');
const db = require('./model')
const cors = require('cors');
const morgan = require('morgan');
const app = express()

/* 中间件start */
app.use(express.json()) // 处理json 
app.use(cors()) // 处理跨域
app.use(morgan("dev")) // 处理跨域
// app.use()
/* 中间件end */



/* 路由start */
//  引入路由中间件
app.use('/api/v1',require('./routers'))
/* 路由end */


app.listen(config.app.port,() => {
    console.log("项目启动成功");
})