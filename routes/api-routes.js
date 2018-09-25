const express = require('express');
const db = require("../models")

const router = express.Router();
module.exports = router;


  // Sample  routes ========================================================
 //Route for creating user and number
  router.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(user) {
      res.json(user);
    });
  });

  //Route to get the users number
  router.get("/api/users/:user", function(req, res) {
    console.log("*************User*************");  
    console.log(req.params);
    console.log(req.body);  
    console.log("**************************");
    db.User.findOne({
      where: {
        name: req.params.user
      }
    }).then(function(userInfo) {
      res.json(userInfo);
    });
  });
  