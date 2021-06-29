import { AppState } from "./../types/types";
import * as consts from "../consts/consts";
import { ActionTypes } from "../types/types";

const InitialState: AppState = {
  activeList: null,
};

export default function appReducer(state = InitialState, action: ActionTypes): AppState {
  switch (action.type) {
    case consts.SET_ACTIVE_LIST: {
      return {
        ...state,
        activeList: action.listId,
      };
    }

    case consts.DELETE_LIST: {
      return {
        ...state,
        activeList: null,
      };
    }

    default:
      return state;
  }
}
