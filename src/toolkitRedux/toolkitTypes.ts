export interface TaskType {
  title: string;
  completed: boolean;
  id: string;
  order: number;
  isFavorite: boolean;
}

export interface ListType {
  title: string;
  id: string;
  tasks?: Array<TaskType>;
}

export interface AppState {
  activeList: null | string;
}

export interface AddTask {
  listId: null | string;
  text: string;
}

export interface DelTask {
  id: string;
  listId: null | string;
}

export interface ToggleTask {
  id: string;
  listId: null | string;
}

export interface EditTask {
  id: string;
  value: string;
  listId: null | string;
}

export interface SetTasks {
  id: string;
  listId: null | string;
  tasks: Array<TaskType>;
}

export interface SetFavorite {
  id: string;
  listId: null | string;
}

export interface AddNewList {
  listTitle: string;
}

export interface SetActiveList {
  listId: null | string;
}

export interface DeleteList {
  listId: null | string;
}

export type ActionTypes =
  | AddTask
  | DelTask
  | ToggleTask
  | EditTask
  | SetTasks
  | SetFavorite
  | AddNewList
  | SetActiveList
  | DeleteList;
