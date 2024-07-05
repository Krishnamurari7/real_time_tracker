const express = require('express');
const app = express();

app.get('/', function(res,req){
    res.setEncoding("hello")
});

app.listen(3000);