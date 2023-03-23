import React from "react";
import "../App.css";

function List({ data, index, deleteTask, completedTask }) {
  return (
    <div className="list-container">
      {console.log(typeof data)}
      {data}
      <div className="button-div">
        <button
          onClick={() => {
            completedTask(index);
          }}
        >
          completed
        </button>
        <button
          onClick={() => {
            deleteTask(index);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default List;
