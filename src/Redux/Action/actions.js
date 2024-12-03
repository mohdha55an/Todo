import { 
    AddTodo, 
    Toggle, 
    Search, 
    Remove, 
    MarkAllComleted, 
    MarkInComleted, 
    MarkComleted, 
    Filter 
  } from "./actionType";
  
  export const add = (text) => ({
    type: AddTodo,
    payload: { text }, // Wrap in an object
  });
  
  export const toggle = (id) => ({
    type: Toggle,
    payload: { id }, // Use a descriptive key for clarity
  });
  
  export const updateSearch = (search) => ({
    type: Search,
    payload: { search }, // Wrap the search value in an object
  });
  
  export const remove = (id) => ({
    type: Remove,
    payload: { id },
  });
  
  export const markComleted = (id) => ({
    type: MarkComleted,
    payload: { id },
  });
  
  export const markAllComleted = () => ({
    type: MarkAllComleted,
  });
  
  export const markInComleted = (id) => ({
    type: MarkInComleted,
    payload: { id },
  });
  
  export const filterTodo = (filter) => ({
    type: Filter,
    payload: { filter }, // Wrap the filter value in an object
  });
  