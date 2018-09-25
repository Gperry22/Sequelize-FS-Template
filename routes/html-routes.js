let express = require('express');
let path = require('path');
let router = express.Router();

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

  router.get("/", function(req, res) {
    res.render("../views/home.jade");
  });


