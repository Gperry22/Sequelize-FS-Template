let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
//Set Port and app to express()initiation

let app = express();
let PORT = process.env.PORT || 8080;

let db = require("./models");  //require Models folder


//Using BodyParser and BodyParser JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Setting views to Jade, can be switched to Handlebars
app.set("view engine", "jade");
app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static("nodules/bootstrap/dist"));

//Start Routes====================================
// app.get('/', function(req, res){
//     res.end("Hola")
// })


let htmlRoutes = require("./routes/html-routes.js")
let apiRoutes = require("./routes/api-routes.js");

app.use(htmlRoutes);
app.use(apiRoutes);


//End Routes======================================


//{ force: false } to not overwrite DB each app load
//{ force: true } to overwrite DB each app load
db.sequelize.sync({ force: false}).then(()=> {
    app.listen(PORT, () =>{
        console.log(`Listening on PORT ${PORT}`)
    })
})
