import { makeAutoObservable } from "mobx";
import { ListType } from "./types";
import { v4 as uuidv4 } from "uuid";

export class TodoStore {
  lists: ListType[] = JSON.parse(localStorage.getItem("data") || "[]");
  constructor() {
    makeAutoObservable(this);
  }

  addNewList(title: string) {
    this.lists.push({ title: title, id: uuidv4(), tasks: [] });
  }

  deleteList(listId: string) {
    this.lists.filter((list: ListType) => list.id !== listId);
  }

  addTask(taskText: string, listId: string | null) {
    this.lists = this.lists.map((list: ListType) => {
      if (list.id === listId && list.tasks) {
        return {
          ...list,
          tasks: [
            ...list.tasks,
            {
              title: taskText,
              completed: false,
              id: uuidv4(),
              order: list.tasks.length + 1,
              isFavorite: false,
            },
          ],
        };
      }
      return list;
    });
  }

  delTask(taskId: string, listId: string | null) {
    this.lists = this.lists.map((list: ListType) => {
      if (list.id === listId && list.tasks) {
        return {
          ...list,
          tasks: list.tasks.filter((task) => task.id !== taskId),
        };
      }
      return list;
    });
  }
  toggleTask(taskId: string, listId: string | null) {
    this.lists = this.lists.map((list: ListType) => {
      if (list.id === listId && list.tasks) {
        return {
          ...list,
          tasks: list.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed };
            }
            return task;
          }),
        };
      }
      return list;
    });
  }
  setFavorite(taskId: string, listId: string | null) {
    this.lists = this.lists.map((list: ListType) => {
      if (list.id === listId && list.tasks) {
        return {
          ...list,
          tasks: list.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, isFavorite: !task.isFavorite };
            }
            return task;
          }),
        };
      }
      return list;
    });
  }
  setTasks(sortedTasks: any, listId: string | null) {
    this.lists = this.lists.map((list: ListType) => {
      if (list.id === listId && list.tasks) {
        return {
          ...list,
          tasks: sortedTasks,
        };
      }
      return list;
    });
  }
  editTask(taskId: string, inputValue: string, listId: string | null) {
    this.lists = this.lists.map((list: ListType) => {
      if (list.id === listId && list.tasks) {
        return {
          ...list,
          tasks: list.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, title: inputValue };
            }
            return task;
          }),
        };
      }
      return list;
    });
  }
}
