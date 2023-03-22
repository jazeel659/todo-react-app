import React, { useState } from "react";
import "../App.css";

function Input({ addTask }) {
  const [value, setvalue] = useState("");
  const addItem = () => {
    if (value !== "") {
      addTask(value);
      setvalue("");
    }
    console.log(value);
  };
  return (
    <div className="input-div">
      <input
        placeholder="enter todo"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
        value={value}
      ></input>
      <button onClick={addItem}>add</button>
    </div>
  );
}

export default Input;
