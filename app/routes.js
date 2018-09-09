// import the some module
const express = require('express');
const router = express.Router();

// export module
module.exports = router;

// create router
router.get('/', function(req, res) {
    res.end("This is main page.");
});

router.get('/about', function(req, res) {
    res.end("This is a about page.");
});

router.get('/concat');
router.post('/concat');
