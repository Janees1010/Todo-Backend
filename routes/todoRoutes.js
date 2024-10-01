const express =require("express")
const router = express.Router()
const {getAllTodos,editTodo,addTodo,deleteTodo,todoCompletion} = require("../controller/todoController")


router.get("/",getAllTodos)
router.get("/delete",deleteTodo)
router.get("/completed",todoCompletion)

router.post("/addtodo",addTodo)
router.post("/edit",editTodo)

module.exports = router