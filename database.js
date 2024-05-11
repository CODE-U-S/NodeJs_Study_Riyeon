// mysql2 모듈 가져오기
const mysql = require("mysql2");

// 데이터 베이스 정보 작성
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"0331",
    database: "test",
});

pool.query(`select 100 from dual;`, function (err, rows, fields) {
    console.log(rows);
    pool.end();
});