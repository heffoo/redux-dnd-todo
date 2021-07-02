import { AppState } from "./toolkitTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppState = { activeList: null }

const activeListSlice = createSlice({
  name: "activeList",
  initialState,
  reducers: {
    setActiveList(state, action) {
      return {
        ...state,
        activeList: action.payload.listId,
      };
    },
    deleteList(state, action) {
      return {
        ...state,
        activeList: null,
      };
    },
  },
});

export const { setActiveList, deleteList } = activeListSlice.actions;
export default activeListSlice.reducer;
