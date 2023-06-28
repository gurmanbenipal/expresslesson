var express = require('express');
var router = express.Router();

const todosCtrl = require('../controllers/todos')

router.get('/', todosCtrl.index)

//Get /todos/:id

router.get('/:id',todosCtrl.show)

module.exports = router;
