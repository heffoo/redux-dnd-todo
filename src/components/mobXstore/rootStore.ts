import { TodoStore } from "./todoStore";
import { createContext } from "react";
import { ActiveListStore } from "./activeListStore";

export class RootStore {
  activeList: ActiveListStore;
  todo: TodoStore;
  constructor() {
    this.activeList = new ActiveListStore();
    this.todo = new TodoStore();
  }
}

export const StoreContext = createContext(new RootStore());
