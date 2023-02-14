#
## 项目搭建基础步骤
1.  `npm init -y`初始化项目
2. `npm i express -S` 安装express包
    - 启动基本服务
     ```javascript
        const express = require('express');
        const app = express()

        app.get('/',(req,res) => {
            res.send("hello world")
        })
        app.listen('9090',() => {
            console.log("项目启动成功");
        })
     ```
     - 通过SQL实现数据操作(`npm i mysql -S)`
      ```javascript
        const mysql = require('mysql')
        const connect = mysql.createConnection({
                host:"localhost",
                user:"root",
                password:"123456",
                database:"react-node",
            })
        app.get('/',(req,res) => {
                const spl = 'select * from user'
                connect.query(spl,(err,result) => {
                    if(err) return false
                    res,send(result)
                })
                // res.send("hello world")
            })

      ```

