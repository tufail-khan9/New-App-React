import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
//import MapMethod from "./components/MapMethod";
import TodoItems from "./components/TodoItems";

import './App.css';

function App() {
  const todoItems22 =[{name:'By Milk', dueDate: '10-2-2024'},{name: 'Go To College', dueDate:'10-2-2024'}]
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems22}/>
        
        
      </center>
      {/* <MapMethod /> */}
     
    </>
  );
}

export default App;
