const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');

const PORT = process.env.PORT || 3300


app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended: false, limit:'50mb'}));

app.use(express.static('public'))

//app.use(expressLayout)
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));

require('./routes/api')(app);

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
})