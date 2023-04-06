import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";

function Input({ addTask }) {
  const [value, setvalue] = useState("");
  const addItem = () => {
    if (value !== "") {
      addTask(value);
      setvalue("");
    }
    console.log(value);
  };
  const dispatch = useDispatch();
  return (
    <div className="input-div">
      <input
        placeholder="enter todo"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
        value={value}
      ></input>
      <button
        onClick={() => {
          dispatch({
            type: "addtask",
            payload: value,
          });
        }}
      >
        add
      </button>
    </div>
  );
}

export default Input;
