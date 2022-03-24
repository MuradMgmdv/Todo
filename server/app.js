const express = require('express');
const {v4} = require("uuid");
const cors = require('cors');
const morgan = require('morgan')

const app = express();

const PORT = 3001

const DB = {
 todos: [
   {
     id: v4(),
     text: 'Купить хлеб',
     status: true,
   },
   {
    id: v4(),
    text: 'Помыть посуду',
    status: false,
  }
 ]
}


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.get("/api/v1/todos", (req,res) => {
  console.log('GET');
  res.json(DB.todos);
})

app.post("/api/v1/todos", (req, res) => {
  console.log(req.body);
  const newTodo = {
    id: v4(),
    text: req.body.text,
    status: false,
  };
  DB.todos.push(newTodo)
  res.json(newTodo);
})

app.delete("/api/v1/todos/:id", (req,res) => {
  console.log('!!!!!');
  DB.todos = DB.todos.filter((todo) => todo.id !== req.params.id)
  res.sendStatus(200);

})

app.patch("/api/v1/todos/:id", (req,res) => {
  const curentTodo = DB.todos.find((todo) => todo.id === req.params.id)
  curentTodo.status = !curentTodo.status
  res.json(curentTodo);

})

app.listen(PORT, () => {
  console.log("server has been started on PORT", PORT);
})
