import listReducer from "../reducers/listReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { TypedUseSelectorHook, useSelector} from 'react-redux';
import appReducer from "../reducers/appReducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'


const rootReducer = combineReducers({
    list: listReducer,
    app: appReducer,
    
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default rootReducer;