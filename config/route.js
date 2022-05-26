const express = require('express');
const route = express.Router()
const commentController = require('../controller/Comment');

route.get('/', commentController.homePage)
route.post('/', commentController.addcomment)


route.get('/*', commentController.notFound)

module.exports = route;