"use strict";

// initialize
const express = require('express')
, router = express.Router()
, bodyPaser = require('body-parser')
, routes = require('./src/routes/index.js')
, app = express()
, db = require('./models/');


app.use(bodyPaser.urlencoded({extended: true}))
app.use(express.static('./src/public'))
app.set('view engine', 'pug')

app.use('/', routes)

db.sequelize.sync()
.then((() => {
    console.log('✓ DB connection success.');
    app.listen(3000, function(){
        console.log('server stard on 3000')
    })
}))
// fs
//     .readFileSync(__dirname)
//     .filter(function(file) {
//         console.log(file)
//         return (file.indexOf(".") !== 0 && (file !== "index.js"));
//     })
//     .forEach()



// // init
// const user = sequelize.define('user', {
//     username: Sequelize.STRING,
// })

// sequelize.sync()
