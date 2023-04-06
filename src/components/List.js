import React from "react";
import "../App.css";
import { useDispatch } from "react-redux";

function List({ data, index, deleteTask, completedTask }) {
  const dispatch = useDispatch();

  return (
    <div className="list-container">
      {console.log(typeof data)}
      {data}
      <div className="button-div">
        <button
          onClick={() => {
            dispatch({
              type: "complete",
              payload: data,
            });
          }}
        >
          completed
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "delete",
              payload: data,
            });
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default List;
