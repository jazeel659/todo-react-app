import { createStore } from "redux";
import produce from "immer";

const initialState = {
  data: [
    // { todo: "goto school", iscompleted: true },
    // { todo: "shop", iscompleted: false },
  ],
};
function appReducer(prevState = initialState, action) {
  switch (action.type) {
    case "addtask":
      return {
        ...prevState,
        data: [...prevState.data, { todo: action.payload, iscompleted: false }],
      };
    case "complete":
      //   const newstate = produce(prevState, (draft) => {
      //     console.log(draft["data"]);
      //     draft["data"][`{todo:${action.payload},iscompleted:false}`][
      //       "iscompletes"
      //     ] = true;
      //   });
      //   console.log(newstate);
      //   return { newstate };
      let array = [];
      console.log("o");
      prevState.data.forEach((x, i) => {
        if (x.todo == action.payload) {
          console.log(action.payload);

          array.push({ todo: x.todo, iscompleted: true });
        } else {
          console.log("no");
          array.push(x);
        }
      });
      console.log(array);
      return {
        ...prevState,
        data: array,
      };
    case "delete":
      const arraynew = prevState.data.filter((x) => x.todo != action.payload);
      return {
        ...prevState,
        data: arraynew,
      };
    default:
      return prevState;
  }
}
const store = createStore(appReducer);
export default store;
