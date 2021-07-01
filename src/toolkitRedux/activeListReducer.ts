import { createAction, createReducer } from "@reduxjs/toolkit";

import * as types from "./toolkitTypes";

import { AppState } from "./toolkitTypes";

const InitialState: AppState = {
  activeList: null,
};

export const setActiveList = createAction<types.SetActiveList>("SET_ACTIVE_LIST");

export const deleteList = createAction<types.DeleteList>("DELETE_LIST");

export default createReducer(InitialState, (builder) => {
  builder
    .addCase(setActiveList, (state, action) => {
      return {
        ...state,
        activeList: action.payload.listId,
      };
    })

    .addCase(deleteList, (state, action) => {
      return {
        ...state,
        activeList: null,
      };
    });
});
