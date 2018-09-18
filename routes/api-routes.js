const express = require('express');
const db = require("../models")

const router = express.Router();
module.exports = router;


  // Sample  routes ========================================================
  // GET route for getting all of the tasks taskr posted  user logged in
  //Note this is a correct route that would go into the the models folder and find what you are 
  //looking for. There is no model set up for this route though.
  router.get("/api/tasks/:id", function(req, res) {
    db.Task.findAll({
      where: {
        TaskrId: req.params.id
      }
    }).then(function(dbTask) {
      res.json(dbTask);
      // console.log("For Test" , dbTask);
    });
  });