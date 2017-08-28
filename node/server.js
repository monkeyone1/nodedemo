const express = require('express');
const static = require('express-static');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const multer=require('multer');
const ejs = require('ejs');

let server = express();
server.listen(8080);

//1. 解析cookie
server.use(cookieParser('231'));
//2. 使用session
let arr = [];
for(let i=0; i<10000;i++){
    arr.push('keys_'+Math.random());
}
server.use(cookieSession({name: 'zns_sessid',keys:arr, maxAge:20*3600*1000}));

// 3.post 数据
server.use(bodyParser.urlencoded({extended:false}));
// server.use(multer({dest: './www/upload'}).any());

server.use('/',(req,res,next) => {
    res.sendfile('./views/form.html')
    req.
    console.log(req.query,req.body,req.cookies,req.session);
})

// 4.static 数据
server.use(static('./www'));




