import { AppDispatch, RootState } from "./../store/store";

import { AddTask, DelTask, ToggleTask, EditTask, TaskType, SetFavorite } from "../types/types";

import * as consts from "../consts/consts";

export const setActiveList = (listId: string | null) => (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch({
    type: "SET_ACTIVE_LIST",
    listId,
  });
};

export const addTask = (text: string, listId: null | string): AddTask => {
  return {
    type: consts.ADD_TASK,
    listId,
    text: text,
  };
};

export const delTask = (id: string, listId: null | string): DelTask => {
  return {
    type: consts.DEL_TASK,
    id: id,
    listId,
  };
};
export const toggleTask = (id: string, listId: null | string): ToggleTask => {
  return {
    type: consts.TOGGLE_TASK,
    id: id,
    listId,
  };
};

export const editTask = (id: string, value: string, listId: null | string): EditTask => {
  return {
    type: consts.EDIT_TASK,
    id,
    value: value,
    listId,
  };
};

export const setTasks = (id: string, tasks: Array<TaskType>, listId: any) => ({
  type: consts.SET_TASKS,
  id,
  listId,
  tasks,
});

export const setFavorite = (id: string, listId: null | string): SetFavorite => ({
  type: consts.SET_FAVORITE,
  id: id,
  listId,
});

export const AddNewList = (listTitle: string) => ({
  type: consts.ADD_NEW_LIST,
  listTitle,
});

export const deleteList = (listId: null | string) => ({
  type: consts.DELETE_LIST,
  listId,
});
