import "./index.css";
import React, { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState({
    name: "",
    creationdate: "",
    age: "",
    Delete: "",
    Edit: ""
  });
  const [todos, setTodos] = useState([]);
  
  

  const handle = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const add = (e) => 
  
  
  {
    e.preventDefault();
    const alltodo = {
      name: todo.name,
      creationdate: todo.creationdate,
      age: todo.age,
      Delete: todo.Delete,
      Edit: todo.Edit
    };
    setTodos([...todos, alltodo]);
  };

  const remove = (index) => {
    const updatedtodos = todos.filter((elem) => {
      return index !== elem.id;
    });
    setTodos(updatedtodos);
  };

  const edit = (id) => {
    let newitem = todos.find((elem) => {
      return elem.id === id;
    });
    console.log(newitem);
    
    setTodo(newitem.name);

  };

  return (
    <div className="App">
      <h1>FORM</h1>
      <form onSubmit={add}>
        <label for>Name: </label>
        <input
          type="text"
          name="name"
          value={todo.name}
          onChange={handle}
        ></input>
        <br></br>
        <label for>Creation date: </label>
        <input
          type="text"
          name="creationdate"
          value={todo.creationdate}
          onChange={handle}
        ></input>
        <br></br>
        <label for>Age: </label>
        <input
          type="text"
          name="age"
          value={todo.age}
          onChange={handle}
        ></input>

        <br></br>
        <button input type="submit">
          Submit
        </button>
      </form>
      <br></br>
      <table >
        <tr>
          <th>Name</th>
          <th>creation date</th>
          <th>age</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>

        {todos.map((item) => {
          return (
            <tr key={item.id}>
              <th>{item.name}</th>
              <th>{item.creationdate}</th>
              <th>{item.age}</th>
              <th>
                <button
                  onClick={() => {
                    remove(item.id);
                  }}
                >
                  Delete
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    edit(item.id);
                  }}
                >
                  Edit
                </button>
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
