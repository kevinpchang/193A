'use strict';
const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', function(req, res) {
    res.type('json')
    let radius = parseFloat(req.params.r);
    let area = Math.PI * (radius*radius);
    let circumference = Math.PI * (2*radius);
    res.send({
        "area": area,
        "circumference": circumference
    });
});

// define endpoint for exercise 2 here
app.get('/hello/name', function(req, res) {
    res.type('text')

    if(req.query['first'] && req.query['last']) {
        let first = req.query['first'];
        let last = req.query['last'];
        res.send("Hello " + first + " " + last);
    }
    else if(!req.query['first'] && req.query['last']) {
        res.status(400).send("Missing Required GET parameters: first");
    }
    else if(req.query['first'] && !req.query['last']) {
        res.status(400).send("Missing Required GET parameters: last");
    }
    else if(!req.query['first'] && !req.query['last']){
        res.status(400).send("Missing Required GET parameters: first, last");
    }
});

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
