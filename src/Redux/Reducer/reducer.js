import {
  AddTodo,
  Filter,
  MarkAllComleted,
  MarkComleted,
  MarkInComleted,
  Remove,
  Search,
  Toggle,
} from "../Action/actionType";

const initialState = {
  todos: [],
  filter: "ALL", // Updated default value for better consistency
  search: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddTodo:
      return {
        ...state, // Spread the state to maintain immutability
        todos: [
          ...state.todos,
          {
            text: action.payload.text,
            completed: false,
          },
        ],
      };

    case Toggle:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case Remove:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload.id),
      };

    case MarkComleted:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
      };

    case MarkInComleted:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
      };

    case Filter:
      return {
        ...state,
        filter: action.payload.filter, // Update the filter value
      };

    case Search:
      return {
        ...state,
        search: action.payload.search, // Update the search term
      };

    case MarkAllComleted:
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          completed: true,
        })),
      };

    default:
      return state; // Return the current state for unrecognized actions
  }
};

export default todoReducer;
