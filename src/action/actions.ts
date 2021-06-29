import { AppDispatch, RootState } from "./../store/store";

import * as types from "../types/types";

import * as consts from "../consts/consts";

export const setActiveList = (listId: string | null) => (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch({
    type: consts.SET_ACTIVE_LIST,
    listId,
  });
};

export const addTask = (text: string, listId: null | string): types.AddTask => ({
    type: consts.ADD_TASK,
    listId,
    text,
});

export const delTask = (id: string, listId: null | string): types.DelTask => ({
    type: consts.DEL_TASK,
    id,
    listId,
  });
export const toggleTask = (id: string, listId: null | string): types.ToggleTask => ({
    type: consts.TOGGLE_TASK,
    id,
    listId,
});

export const editTask = (id: string, value: string, listId: null | string): types.EditTask => ({
  type: consts.EDIT_TASK,
  id,
  value,
  listId,
});

export const setTasks = (id: string, tasks: Array<types.TaskType>, listId: null | string): types.SetTasks => ({
  type: consts.SET_TASKS,
  id,
  listId,
  tasks,
});

export const setFavorite = (id: string, listId: null | string): types.SetFavorite => ({
  type: consts.SET_FAVORITE,
  id,
  listId,
});

export const AddNewList = (listTitle: string): types.AddNewList => ({
  type: consts.ADD_NEW_LIST,
  listTitle,
});

export const deleteList = (listId: null | string): types.DeleteList => ({
  type: consts.DELETE_LIST,
  listId,
});
