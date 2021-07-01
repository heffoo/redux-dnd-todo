import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AddTask, ListType } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

import * as types from "../../types/toolkitTypes";

import * as consts from "../../consts/consts";

const InitialState: ListType[] = JSON.parse(localStorage.getItem("data") || "[]");

export const addTask = createAction<types.AddTask>(consts.ADD_TASK);

export const delTask = createAction<types.DelTask>(consts.DEL_TASK);

export const addNewList = createAction<types.AddNewList>(consts.ADD_NEW_LIST);

export default createReducer(InitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      // console.log(action)
      //     return state.map((list: ListType) => {
      //       if (list.id === action.payload.listId && list.tasks) {
      //         return {
      //           ...list,
      //           tasks: [
      //             ...list.tasks,
      //             {
      //               title: action.payload.text,
      //               completed: false,
      //               id: uuidv4(),
      //               order: list.tasks.length + 1,
      //               isFavorite: false,
      //             },
      //           ],
      //         };
      //       }
      //       return list;
      //     });
    })
    .addCase(addNewList, (state, action) => {
      return [...state, { title: action.payload.listTitle, id: uuidv4(), tasks: [] }];
    });
});
