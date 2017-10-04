const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/gallery', (err , db) => {
        if(err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};


// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.get('/images', (req, res) => {
    connection((db) => {
        db.collection('images')
        .find()
        .toArray()
        .then((images) => {
            response.data = images;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        })
    })
})

router.get('/image/:id',(req, res) => {
    console.log(`url: ${req.url} id : ${req.params.id}`);
    connection((db) => {
        db.collection('images')
        .find({ id : req.params.id })
        .toArray()  
        .then((images) => {
            response.data = images,
            res.json(response);
            console.log(response.data);
        })
        .catch((err) => {
            sendError(err, res);
        })
    })
})

router.post('/register', (req, res) => {
    console.log(`data:${req.body}`);
    console.log("name"+ req.body.name);
    console.log("password"+ req.body.password)
    connection((db) => {
        db.collection('users')
        .insert(req.body)
        .then((resp) => {
            response.data = resp,
            res.json(response);
            console.log(resp);
        })
        .catch((err) => {
            sendError(err, res);
        })
    })
})


module.exports = router;