import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import FilterButton from "./FilterButton";
import { add, updateSearch } from "../Redux/Action/actions";
import { BsSearch } from "react-icons/bs";
import List from "./List";

const Todo = () => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");
  const [searchText, setSearchText] = useState("");
  const handleAddTodo = (text) => {
    dispatch(add(text));
  };

  const saveTodo = () => {
    if (todoText.trim() !== "") {
        console.log("Adding todo:", todoText.trim()); // Debug statement
        handleAddTodo(todoText.trim());
        setTodoText("");
      } else {
        console.log("Todo input is empty"); // Debug for empty input
      }
  };

  const handleSearchTodo = (value) => {
    setSearchText(value);
    dispatch(updateSearch(value));
  };
  return (
    <div className="bg-blue-200 max-w-4xl mx-auto ml-6 items-center p-4 sm:mt-8">
      <h1 className="text-blue-700 text-center text-2xl m-6 font-bold uppercase">
        Todo List App
      </h1>
      {/* input button */}
      <div className="flex items-center  mb-4">
        <input
          type="text"
          placeholder="Enter Your Task"
          name="text"
          id="addTodo"
          className="flex-grow p-2 border-b-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white ml-4 p-2 rounded hover:bg-blue-800 focus:outline-none "
          onClick={saveTodo}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
      {/* search filter */}

      <div className="flex items-center justify-between flex-wrap">
        <FilterButton />
        {/* search */}
        <div className="flex items-center justify-end mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search"
            id="addTodo"
            name="text"
            value={searchText}
            onChange={(e) => handleSearchTodo(e.target.value)}
            className="flex-grow rounded p-2 border-b-2 border-gray-300 focus:outline-none 
             focus:border-blue-500 sm:mr-4"
          />
          <button
            className="p-2 bg-blue-500 hover:bg-blue-800 text-white rounded focus:outline-none"
            onClick={saveTodo}
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <List />
    </div>
  );
};
export default Todo;
