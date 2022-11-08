const { Router } = require("express");
const {authentication} =require('../middlewares/authentication.middleware')
const {TodoController}=require('../controllers/todo.controller');
const { authorisation } = require("../middlewares/authorization.middleware");
const TodoRoutes=Router();

TodoRoutes.get('/',authentication,TodoController.getTodo);
TodoRoutes.post('/create',authentication,authorisation(['admin','user']),TodoController.createTodo);
TodoRoutes.put('/:id',authentication,authorisation(['admin']),TodoController.updateTodo);
TodoRoutes.delete('/:id',authentication,authorisation(['admin',]),TodoController.deleteTodo);

module.exports={
    TodoRoutes,
}
