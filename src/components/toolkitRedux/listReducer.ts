import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AddTask, ListType } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

import * as types from "../../types/toolkitTypes";

import * as consts from "../../consts/consts";
import { AppState } from "../../types/toolkitTypes";

const InitialState: AppState = {
  activeList: null,
};

export const setActiveList = createAction<types.SetActiveList>(consts.SET_ACTIVE_LIST);

export default createReducer(InitialState, (builder) => {
  builder.addCase(setActiveList, (state, action) => {
    return {
        ...state,
        activeList: action.payload.listId,
      };
  });
});
