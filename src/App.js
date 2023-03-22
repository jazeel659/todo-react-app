import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";
function App() {
  const [data, setdata] = useState([]);
  const addTask = (todo) => {
    const newTask = [...data, todo];
    setdata(newTask);
  };
  const deleteTask = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setdata(newData);
    console.log(index);
  };
  return (
    <div className="main">
      <h1>todo app</h1>
      <Input addTask={addTask}></Input>
      <div className="list-div">
        {data.map((x, index) => {
          return <List data={x} index={index} deleteTask={deleteTask}></List>;
        })}
      </div>
    </div>
  );
}

export default App;
