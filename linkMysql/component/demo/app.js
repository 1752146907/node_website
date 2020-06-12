var http       = require('http');
var mysql      = require('mysql');
var url = require('url');



// 操作数据库
function handleMysql(sql) {
    connection.query(sql, (error, results, fields) => {
        if(error){
            console.log('[SELECT ERROR] - ',error.message);
            return;
        }
        response.end(results)

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

function App(request, response){
    /**
     * 连接数据库
     **/
    var connection = mysql.createConnection({
        host     : 'rm-bp10udsjt913x5r5fuo.mysql.rds.aliyuncs.com',
        user     : 'lirongzhi',
        password : 'admin123!',
        database : 'test'
    });
    connection.connect();

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


    // 打印当前URL地址
    let path = url.parse(request.url).pathname;
    if(path == '/login') {
        if(path != '/favicon.ico') {
            console.log("login")
            console.log(connection);return
            connection.query(sqlSee, (error, results, fields) => {
                if(error){
                    console.log('[SELECT ERROR] - ',error.message);
                    return;
                }
                response.end(results)

                console.log("执行成功！");
            });
        }
    }
    else if(path == '/register') {
        if(path != '/favicon.ico') {
            console.log("register")
            response.end("register")
        }
    }
}

module.exports = App;