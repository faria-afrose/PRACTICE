import React from "react";
//for toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
export default function todoPackage() {
  const handelAddTodo = () => {
    toast("New Todo is Added ");
  };
  const handelDeleteTodo = () => {
    toast(" Todo is Deleted ");
  };
  return (
    <div>
      <h1 className="text-center">Todo Package</h1>
      <hr />
      <button onClick={handelAddTodo}>Add new todo</button>
      <button onClick={handelDeleteTodo}>Delete todo</button>
      <ToastContainer />
    </div>
  );
}
