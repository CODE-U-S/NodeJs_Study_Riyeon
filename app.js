const express = require('express'); 
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
    res.send("Hello Worl Test");
});

let arr = [];
app.post('/array-test', (req, res) => {
    arr.push({
        name: 'lee',
        age: 20
    });
    res.send(arr);
});

app.post('/array-test2', (req, res) => {
    arr.push({
        name: 'park',
        age: 30
    });
    res.send(arr);
});

app.get('/array-test', (req, res) =>{
    res.send(arr);
});

app.delete('/array-test', (req, res) => {
    arr = [];
    res.send(arr);
});

// 서버 실행
app.listen(port, () => {
    console.log(`App running on port ${port}`);
})

