import React from "react";
import "../App.css";

function List({ data, index, deleteTask }) {
  return (
    <div className="list-container">
      {data}
      <button
        onClick={() => {
          deleteTask(index);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default List;
