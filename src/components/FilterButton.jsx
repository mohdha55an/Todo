import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllComleted } from "../Redux/Action/actions";

const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodo(filter));
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllComleted()); // Dispatch the action creator
  };

  return (
    <div className="flex space-x-4 items-center">
      {/* Filter Dropdown */}
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
        className="text-sm px-2 py-1 border-blue-300 focus:outline-none"
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">InComplete</option>
      </select>

      {/* Mark All Completed Button */}
      <button
        onClick={handleMarkAllCompleted} // Use onClick only
        className="text-sm px-2 py-1 bg-blue-700 text-white rounded ml-2"
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButton;
