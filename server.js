const express = require('express');

var app = express();

app.get('/', (req, res)=>{
    res.send('here!');
});

app.listen(process.env.PORT || 3001);