const express = require('express');
const mysql = require('mysql')

const app = express()

const connect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"react-node",
})

app.get('/',(req,res) => {
    const spl = 'select * from user'
    connect.query(spl,(err,result) => {
        console.log("result:",result);
        console.log("err:",err);
        if(err) {
            res.send({
                code:500,
                err,
            })
            return false
        }
        res.send({
            code:200,
            data:result
        })
    })
    // res.send("hello world")
})
app.post('/add',((req,res) => {
    const sql = `insert into user(user,age) values(?,?)`
    connect.query(sql,["刘欢欢",18],(err,result) =>{
        console.log(result);
        res.send(result)
    })
}))

app.put('/edit',((req,res) => {
    const sql = 'update user set user=? where id=?'
    connect.query(sql,["石磊磊",3],(err,result) =>{
        console.log(result);
        res.send(result)
    })
}))
app.delete('/delete',(req,res) => {
    const sql = 'delete from user where id=?'
    connect.query(sql,4,(err,result) => {
        res.send(result)
    })
})
app.listen('9090',() => {
    console.log("项目启动成功");
})