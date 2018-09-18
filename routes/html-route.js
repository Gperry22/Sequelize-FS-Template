const express = require('express');
const path = require("path");

const router = express.Router();
module.exports = router;


// using express.Router so I don't have to export everything
//as module.exports

//Example
/* module.exports = (app) => {
     app.get('/', (req, res))
 }
  Becomes


  router.get("/", function(req, res) {
    res.render("../views/"VIEWS HOMEPAGE"");
  });  
 
 */

// Sample route index route for home page
//   router.get("/", function(req, res) {
//     res.render("../views/homepage.jade");
//   });


