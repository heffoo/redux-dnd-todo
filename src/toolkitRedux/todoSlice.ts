import { ListType } from "./toolkitTypes";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: ListType[] = JSON.parse(localStorage.getItem("data") || "[]");

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewList(state, action) {
      return [...state, { title: action.payload.listTitle, id: uuidv4(), tasks: [] }];
    },
    deleteList(state, action) {
      return state.filter((list: ListType) => list.id !== action.payload.listId);
    },
    addTask(state, action) {
      return state.map((list: ListType) => {
        if (list.id === action.payload.listId && list.tasks) {
          return {
            ...list,
            tasks: [
              ...list.tasks,
              {
                title: action.payload.text,
                completed: false,
                id: uuidv4(),
                order: list.tasks.length + 1,
                isFavorite: false,
              },
            ],
          };
        }
        return list;
      });
    },
    delTask(state, action) {
      return state.map((list: ListType) => {
        if (list.id === action.payload.listId && list.tasks) {
          return {
            ...list,
            tasks: list.tasks.filter((task) => task.id !== action.payload.id),
          };
        }
        return list;
      });
    },
    toggleTask(state, action) {
      return state.map((list: ListType) => {
        if (list.id === action.payload.listId && list.tasks) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === action.payload.id) {
                return { ...task, completed: !task.completed };
              }
              return task;
            }),
          };
        }
        return list;
      });
    },
    setFavorite(state, action) {
      return state.map((list: ListType) => {
        if (list.id === action.payload.listId && list.tasks) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === action.payload.id) {
                return { ...task, isFavorite: !task.isFavorite };
              }
              return task;
            }),
          };
        }
        return list;
      });
    },
    setTasks(state, action) {
      return state.map((list: ListType) => {
        if (list.id === action.payload.listId && list.tasks) {
          return {
            ...list,
            tasks: action.payload.tasks,
          };
        }
        return list;
      });
    },
    editTask(state, action) {
      return state.map((list: ListType) => {
        if (list.id === action.payload.listId && list.tasks) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === action.payload.id) {
                return { ...task, title: action.payload.value };
              }
              return task;
            }),
          };
        }
        return list;
      });
    },
  },
});

export const { addNewList, deleteList, addTask, delTask, toggleTask, setFavorite, setTasks, editTask } =
  todoSlice.actions;
export default todoSlice.reducer;
