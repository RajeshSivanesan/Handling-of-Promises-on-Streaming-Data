const express = require('express')
const app = express()
timer = 0;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/request', function(req, res) {
    setTimeout(function() {
        res.send("success!!!");
    }, timer);

    timer = timer + 1000;

    console.log(timer);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
