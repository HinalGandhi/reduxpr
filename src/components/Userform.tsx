import React from "react";
import {useAddTaskMutation} from "../app/services/GetUserRecords"
import { useDispatch } from "react-redux";

const UserForm = () => {
    const [addUser, result] = useAddTaskMutation();
  const dispatch = useDispatch();
  const handleAddTask = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const user = {
      name:"hinal",
      email:"hinal12",
      password:"2333",
      id: Math.random()
    };
    await addUser(user);
  };

  return (
    <>
      <div className="flex flex-col max-w-sm justify-center align-middle mt-4 bg-slate-900 mx-auto p-4 rounded-md">
        <form
          onSubmit={handleAddTask}
        >
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task"
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="flex items-center justify-ceneter">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white  rounded-md font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add user
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;