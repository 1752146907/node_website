
var http       = require('http');
var mysql      = require('mysql');
var url = require('url');
var App = require('./component/demo/app');

/**
 * 引入文件例子
 **/
var hello = require('./component/demo');
hello = new hello();
hello.setName('Mr.Li');
hello.sayHello();


/**
 * 连接数据库
 **/
var connection = mysql.createConnection({
    host     : 'rm-bp10udsjt913x5r5fuo.mysql.rds.aliyuncs.com',
    user     : 'lirongzhi',
    password : 'admin123!',
    database : 'test'
});
//
connection.connect();

// 安装mysql
// cnpm install mysql

// 执行该文件
// node 文件名.js

// 插入
var sqlAdd = "INSERT INTO users(`name`,`sex`) VALUES ('nidaye',1)";

// 更新
let sqlUpdate = 'UPDATE users SET name=?,sex=? WHERE id=?';
let modSqlParams = ['xioaozhong', '1', 1];

// 删除
var sqlDelete = "DELETE FROM users where id = 3";

// 查询
var sqlSee = "SELECT * FROM users";
var resultsData = {};

// 封装http请求方法
function httpServerSee() {
    http.createServer(function (request, response) {

        // 发送 HTTP 头部
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'});

        // 打印当前URL地址
        let path = url.parse(request.url).pathname;
        console.log(path)

        // 发送响应数据 resultsData
        response.end(JSON.stringify(resultsData));
    }).listen(8888);
}

// 操作数据库
function handleMysql(sql) {
    connection.query(sql, function (error, results, fields) {
        if(error){
            console.log('[SELECT ERROR] - ',error.message);
            return;
        }
        resultsData = results;

        // 执行http方法
        httpServerSee();
        console.log("执行成功！");
    });
}

// 封装查看函数
function handleAfferent() {
    handleMysql(sqlSee)
}
// 封装删除函数
function handleDelete() {
    handleMysql(sqlDelete)
}
// 封装更新函数
function handleUpdate() {
    connection.query(sqlUpdate, modSqlParams, function (error, results, fields) {
        if(error){
            console.log('[SELECT ERROR] - ',error.message);
            return;
        }
        resultsData = results;

        // 执行http方法
        httpServerSee();

        console.log("执行成功！");
    });
}
// 封装插入函数
function handleAdd() {
    handleMysql(sqlAdd)
}

// 执行查看函数
handleAfferent(sqlSee);
// httpServerSee();