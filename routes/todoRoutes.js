const express =require("express")
const router = express.Router()
const {getAllTodos,editTodo,addTodo,activeTodo,deleteTodo,todoCompletion} = require("../controller/todoController")


router.get("/",getAllTodos)
router.get("/delete/:id",deleteTodo)
router.get("/completed/:id",todoCompletion)
router.get("/active/:id",activeTodo)

router.post("/addtodo",addTodo)
router.post("/edit/:id",editTodo)

module.exports = router