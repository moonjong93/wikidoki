import express from 'express'
let router = express.Router();


router.get('/', index)
router.get('/:title', find)
router.get('/:title/create', create)
router.post('/serach', serach)


const testDocument = {
    title: 'hello world',
    redirect_title: null,
    historys: [
        // {
        //     id: 0, docuemnt_title: 'hello world', summary_text: 'hello moon this is summary', main_text: 'hello moon this is summary when you come .....', ver: 0
        // },
        // {
        //     id: 0, docuemnt_title: 'hello world', summary_text: 'hello moon this is summary', main_text: 'hello moon this is summary when you come .....', ver: 0
        // }
    ]
}


// serach for redirect with params
function serach(req, res){
    const target = req.body.title;
    res.redirect(`/${target}`)
}


function index(req, res){
    res.render('index', )
}

function find(req ,res){
    const title = req.params.title


    res.render('index', req.params)
}

function create(req, res){
    res.render('create')
}

// function serach(req, res){
//     res.send(req.params)
// }


export default router