// import the some module
const express = require('express');
const router = express.Router();
const path = require('path');

// export module
module.exports = router;

// create router
router.get('/', function(req, res) {
    // res.end("This is main page.");
    res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/about', function(req, res) {
    res.end("This is a about page.");
});

router.get('/concat');
router.post('/concat');
