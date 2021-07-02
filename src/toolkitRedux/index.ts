import activeListSlice from "./activeListSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
  list: activeListSlice,
  todos: todoSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
