import { useEffect, useState } from "react"
import { InputForm } from "./Components/InputForm";
import { TodoItem } from "./Components/TodoItem";
import "./styles/App.css"

// TODO: Add undo feature to reverse a mistaken change
// TODO: Add points for each task and add points when each task is completed

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('TODO_LIST')
    return localValue ? JSON.parse(localValue) : []
  });

  useEffect(() => {
    localStorage.setItem("TODO_LIST", JSON.stringify(todos))
  }, [todos])

  function AddTodo(title) {
    setTodos([...todos, {
      id: crypto.randomUUID(), title, completed: false
    }])
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        } else {
          return todo
        }
      })
    })
  }

  function deleteTodo(id){
    setTodos(current => {
      return current.filter(todo => todo.id !== id)
    })
  }

  function removeSelectedTasks() {
    setTodos(taskList => {
      return taskList.filter(todo => !todo.completed)
    })
  }

  return (
    <div className="todo-card">
    <h1>Todo List</h1>
    <InputForm onSubmit={AddTodo} />
    
    <h2>Todo Items:</h2>
    <button onClick={removeSelectedTasks}>Delete Selected</button>
    <ul>
      {todos.length === 0 && "No Tasks"}
      {todos.map(todo => (
        <TodoItem {...todo} key={todo.id} onToggle={toggleTodo} onDelete={deleteTodo}/>
      ))}
    </ul>
    </div>
  )
}

export default App
