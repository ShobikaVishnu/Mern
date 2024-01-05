import React, { cloneElement, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div style={{
      backgroundColor:"#00d4ff",
      height:"100vh",
      display:"flex", justifyContent:"center", alignItems:"center",
    }}>
      <div style={{
        backgroundColor:"#fff",
      height:"auto",
      width:"500px",
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", borderRadius:"20px",
    }}>
      <h1 style={{
        margin:"10px",
        border:"4px solid black",
        padding:"10px 20px",
        borderRadius:"10px 0 10px 0",
        color:"#00d4ff",
      }}>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{margin:"10px",}}
      />
      <button onClick={handleAddTodo} style={{width:"100px", backgroundColor:"yellowgreen", fontSize:"20px",}}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span
                style={{
                  marginRight: "10px",
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </div>
            <button
              style={{ marginTop: "5px", marginBottom: "5px" }}
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default TodoList;
