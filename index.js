import express from 'express'
import bodyPaser from 'body-parser'
import routes from './src/routes/index.js'
import db from './models/'
const router = express.Router()
, app = express()

app.use(bodyPaser.urlencoded({extended: true}))
app.use(express.static('./src/public'))
app.set('view engine', 'pug')

app.use('/', routes)

if(process.env.DEV_TYPE == 'db'){
    db.sequelize.sync()
    .then((() => {
        console.log('✓ DB connection success.');
        app.listen(3000, ()=>{
            console.log('server stard on 3000')
        })
    }))
}else{
    app.listen(3000, () => {
        console.log('server stared on 3000')
    })
}
