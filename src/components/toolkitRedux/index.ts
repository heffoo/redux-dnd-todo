import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import todosReducer from "../../components/toolkitRedux/todosReducer";
import listReducer from "../../components/toolkitRedux/listReducer";


const rootReducer = combineReducers({
  list: listReducer,
  todos: todosReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
