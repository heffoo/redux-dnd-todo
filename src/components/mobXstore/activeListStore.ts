import { makeAutoObservable } from "mobx";

export class ActiveListStore {
  activeList: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveList(id: string) {
    this.activeList = id;
  }

  deleteActiveList() {
    this.activeList = null;
  }
}
