
const commentModel = require('../models/Comment');

const homePage = async (req, res) => {
    await commentModel.find()
            .then( result => {
                res.render('index', {
                    allcomments: result,
                    result: ''
                });
            })
            .catch( err => {
                console.log(err)
            })
}

const addcomment = (req, res) => {
    let comment = new commentModel(req.body);
    comment.save()
        .then( () => {
            // res.render('index', {
            //     userName: 'sam',
            //     isAdmin: false,
            //     allUsers: allUsers,
            //     result: 'user has been added'
            // })
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

const notFound =  (req, res) => {
    res.render('notFound')
}

module.exports = {
    homePage,
    notFound,
    addcomment
}
