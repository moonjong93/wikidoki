
// initialize
const express = require('express')
, router = express.Router()
, bodyPaser = require('body-parser')
, app = express()
app.use(bodyPaser.urlencoded({extended: true}))
app.use(express.static('./src/public'))
app.set('view engine', 'pug')


const routes = require('./src/routes/index.js')
app.use('/', routes)

app.listen(3000, function(){
    console.log('server stard on 3000')
})
