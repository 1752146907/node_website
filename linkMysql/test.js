var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'rm-bp10udsjt913x5r5fuo.mysql.rds.aliyuncs.com',
    user     : 'lirongzhi',
    password : 'admin123!',
    database : 'test'
});

connection.connect();

// 安装mysql
// cnpm install mysql

// 执行该文件
// node 文件名.js

// 插入
// var sql = "INSERT INTO users(`name`,`sex`) VALUES ('nidaye',1)";

// 更新
// let sql = 'UPDATE users SET name=?,sex=? WHERE id=?';
// let modSqlParams = ['Mr.Li', '0', 2];

// 删除
// var sql = "DELETE FROM users where id = 3";

// 查询
var sql = "SELECT * FROM users";



connection.query(sql, function (error, results, fields) {
    if(error){
        console.log('[SELECT ERROR] - ',error.message);
        return;
    }
    console.log("执行成功！")
    console.log(results);
    return results
});
