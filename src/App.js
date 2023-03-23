import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";
function App() {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(["ALL", "PENDING"]);
  const [selected, setselected] = useState("ALL");
  const addTask = (todo) => {
    const newTask = [...data, { task: todo, iscompleted: false }];
    setdata(newTask);
  };
  const deleteTask = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setdata(newData);
    console.log(index);
  };
  const completedTask = (index) => {
    const updated = [...data];
    updated[index].iscompleted = true;
    console.log(updated);
    setdata(updated);
  };
  return (
    <div className="main">
      <h1>todo app</h1>
      <Input addTask={addTask}></Input>
      <h4>TODO LIST</h4>
      {data.length > 0 ? (
        <div className="filter-div">
          {filter.map((x) => {
            return (
              <div
                style={{ color: selected === x ? "green" : "red" }}
                onClick={() => {
                  setselected(x);
                }}
              >
                {x}
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ color: "red" }}>no task</div>
      )}

      <div className="list-div">
        {data
          .filter((y) => {
            return selected === "ALL" ? y : y.iscompleted === false;
          })
          .map((x, index) => {
            console.log(x);
            return (
              <List
                data={x.task.toString()}
                index={index}
                deleteTask={deleteTask}
                completedTask={completedTask}
              ></List>
            );
          })}
      </div>
    </div>
  );
}

export default App;
