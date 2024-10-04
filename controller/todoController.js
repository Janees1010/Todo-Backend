const Todo = require("../models/todo")

const getAllTodos = async(req,res)=>{
    try{
        const todos = await Todo.find()
        return res.status(200).json(todos)
    }catch(err){
       return res.status(500).json(err.message)
    }
}

const addTodo = async(req,res)=>{
   
    
    const {todo} = req.body
 
    
   try {
      const newTodo = new Todo({todo:todo})
      const response = await newTodo.save()
      return res.status(200).json(response)
   }catch (error) {           
      return res.status(500).json(error.message)
   }
}

const editTodo = async(req,res)=>{
    const {newTodo} = req.body;
    const {id} = req.params
    try {
        const response = await Todo.findByIdAndUpdate(id,{todo:newTodo})
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const deleteTodo = async (req,res)=>{
    const {id} = req.params;
    console.log(id);
    
    try {
        const response  = await Todo.findByIdAndDelete(id)
        console.log(response);
        
        return res.status(200).json("todo deleted successfully")
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const todoCompletion = async(req,res)=>{
    const {id} = req.params;
    try {
        const response = await Todo.findByIdAndUpdate(id,{isDone:true})
        console.log(response);
        
        res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const activeTodo = async(req,res)=>{
    const {id} = req.params;
    try {
        const response = await Todo.findByIdAndUpdate(id,{isDone:false})
        return res.status(200).json(response)
    } catch (error) {
       return res.status(500).json(error.message)   
    }
}
 

module.exports = {getAllTodos,addTodo,editTodo,deleteTodo,todoCompletion,activeTodo}