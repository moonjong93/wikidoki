var express = require('express');
var router = express.Router();
var models = require('../../models')

router.get('/', function(req, res){
    models['Historys'].create({
        documnet_title: 'hello world',
        summary_text: 'four',
        main_text: 'dkans',
        ver: 2
    })
    .then( (data) => {
        res.render('index', {message: data})
    })
});


router.get('/find', function(req, res){
    models['Historys'].findOne({
        where: {documnet_title: 'hello world'},
        order: [['createdAt', 'DESC']]
    })
    .then( (data) => {
        res.send(data)
    })
})


router.post('/', function(req, res){
   res.send('POST route on things.');
});


module.exports = router;