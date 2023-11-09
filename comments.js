// Create web server
var express = require('express');
var router = express.Router();

// Create API
router.get('/', function(req, res, next) {
  // Get data from database
  var db = req.db;
  var collection = db.get('comments');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

// Insert data
router.post('/', function(req, res) {
  // Get data from client
  var db = req.db;
  var userName = req.body.userName;
  var comment = req.body.comment;
  var date = req.body.date;
  // Insert data to database
  var collection = db.get('comments');
  collection.insert({
    "userName": userName,
    "comment": comment,
    "date": date
  }, function(err, doc) {
    if (err) {
      res.send("There was a problem adding the information to the database.");
    }
    else {
      res.send("Success!");
    }
  });
});

module.exports = router;