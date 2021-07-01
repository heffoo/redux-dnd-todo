import { createAction, createReducer, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { ListType } from "./toolkitTypes";
import * as types from "./toolkitTypes";

const initialState: ListType[] = JSON.parse(localStorage.getItem("data") || "[]");

export const addNewList = createAction<types.AddNewList>("ADD_NEW_LIST");

export const deleteList = createAction<types.DeleteList>("DELETE_LIST");

export const addTask = createAction<types.AddTask>("ADD_TASK");

export const delTask = createAction<types.DelTask>("DEL_TASK");

export const toggleTask = createAction<types.ToggleTask>("TOGGLE_TASK");

export const setFavorite = createAction<types.SetFavorite>("SET_FAVORITE");

export const setTasks = createAction<types.SetTasks>("SET_TASKS");

export const editTask = createAction<types.EditTask>("EDIT_TASK");

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addNewList, (state, action) => {
      return [...state, { title: action.payload.listTitle, id: uuidv4(), tasks: [] }];
    })
    .addCase(deleteList, (state, action) => {
      return state.filter((list: ListType) => list.id !== action.payload.listId);
    })
    .addCase(addTask, (state, action) => {
      return state.map((list: ListType) => {
        console.log(current(list));
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
    })
    .addCase(delTask, (state, action) => {
      return state.map((list: ListType) => {
        if (list.id === action.payload.listId && list.tasks) {
          return {
            ...list,
            tasks: list.tasks.filter((task) => task.id !== action.payload.id),
          };
        }
        return list;
      });
    })
    .addCase(toggleTask, (state, action) => {
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
    })
    .addCase(setFavorite, (state, action) => {
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
    })
    .addCase(setTasks, (state, action) => {
      return state.map((list: ListType) => {
        if (list.id === action.payload.listId && list.tasks) {
          return {
            ...list,
            tasks: action.payload.tasks,
          };
        }
        return list;
      });
    })
    .addCase(editTask, (state, action) => {
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
    });
});
