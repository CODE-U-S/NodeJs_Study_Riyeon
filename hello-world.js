// express 모듈 불러오기
// require : 모듈 불러올 때 사용
// javascript 문법 : const 상수 express 변수명 -> 변수 선언하는 거 
const express = require('express'); 

// express 객체 생성
const app = express();

// 포트 생성
const port = 3000;

// hello world 문자열을 보내주는 코드 작성
// get = read -> 데이터를 읽어서 보내는 방법
// '/' -> 주소 설정(기본 주소 : localhost:3000) + /     = http://localhost:3000/
// req, res => request, response
// req - 요청을 보내는 것 (요청 보낸 데이터)
// res - 응답을 보내는 것 (응답 데이터)
app.get('/', (req, res) => {
    res.send("Hello Worl!");    // 응답 Hello World 보내기
});


// 주소 : http://localhost:3000/data
// json으로 데이터 보내기
app.get('/data', (req, res) =>{
    res.send({
        name:'kim',
        age:30
    });
    // 엔터 없이도 가능
    // res.send({name:'kim', age:30});
});

// 데이터 추가 코드 작성
// 배열에 데이터 추가
// javascript 배열 선언
// 숫자, 문자열, 객체 들어갈 수 있음
let arr = [];

app.post('/array', (req, res) => {
    arr.push({
        name: 'kim',
        age: 30
    });
    res.send(arr);
});

// 데이터 삭제 코드 작성
// port - array
// delete - array
app.delete('/array', (req, res) => {
    arr = [];
    res.send(arr);
});

// 서버 실행
app.listen(port, () => {
    // javascript 문법 : 문자열 + 변수 -> "App running on port" + port
    // 'App running on port ${port}'
    console.log(`App running on port ${port}`);    // console.log : 터미널에 나오도록 출력시킴
})

