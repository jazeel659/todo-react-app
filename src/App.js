import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
function App() {
  // const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(["ALL", "PENDING"]);
  const [selected, setselected] = useState("ALL");

  const data = useSelector((state) => {
    console.log(state.data);
    return state.data;
  });

  useEffect(() => {
    async function getdata() {
      const api = "http://localhost:3001";
      try {
        let response = await axios.get(api);
        // setdata(response.data);
        console.log(response.data);
      } catch (err) {
        console.log("error");
      }
    }
    getdata();
  }, []);

  const addTask = (todo) => {
    const newTask = [...data, { task: todo, iscompleted: false }];
    // setdata(newTask);
  };
  const deleteTask = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    // setdata(newData);
    console.log(index);
  };
  const completedTask = (index) => {
    const updated = [...data];
    updated[index].iscompleted = true;
    console.log(updated);
    // setdata(updated);
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
                data={x.todo}
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
