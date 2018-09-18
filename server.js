let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let db = require("./models");  //require Models folder


//Set Port and app to express()initiation
const PORT = process.env.PORT || 8080;
let app = express();

//Using BodyParser and BodyParser JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

//Setting views to Jade, can be switched to Handlebars
app.set("view engine", "jade");
app.set("views", __dirname + "/views");

//Start Routes====================================

const htmlRoutes = require("./routes/html-route.js")

app.use(htmlRoutes)


//End Routes======================================


//{ force: false } to not overwrite DB each app load
//{ force: true } to overwrite DB each app load
db.sequelize.sync({ force: true}).then(()=> {
    app.listen(PORT, () =>{
        console.log(`Listening on PORT ${PORT}`)
    })
})
