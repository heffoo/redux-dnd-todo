import React, { useEffect, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { UpperTabs } from "./components/upper-tabs/upperTabs";
import { SidePanel } from "./components/side-panel/sidePanel";
import { Task } from "./components/Task";
import TextField from "@material-ui/core/TextField";

import "./App.scss";
import { useAppSelector } from "./toolkitRedux/index";
import { TaskType } from "./toolkitRedux/toolkitTypes";
import { addTask } from "./toolkitRedux/todoSlice";

function App() {
  const list = useAppSelector((store) => store.todos);

  let activeList = useAppSelector((store) => store.list.activeList);
  activeList === null && (activeList = list[0]?.id);

  const todos = list.find((item) => activeList === item.id)?.tasks || [];

  const [value, setValue] = useState<string>("");
  const [taskState, setTaskState] = useState<string>("allTasks");
  const [isFiltered, setFiltered] = useState<boolean>(false);

  const notCheckedTasks = todos.filter((task) => !task.completed);
  const CheckedTasks = todos.filter((task) => task.completed);
  const FavoriteTasks = todos.filter((task) => task.isFavorite);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const addNewTask = (e: FormEvent) => {
    e.preventDefault();
    value.length ? dispatch(addTask({ text: value, listId: activeList })) : alert("the field cannot be empty");
    setValue("");
  };

  const sortTasks = (a: TaskType, b: TaskType) => {
    if (a.order < b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  // prettier-ignore
  let currentArray: any = taskState === "allTasks" 
  ? todos
      : taskState === "notCompleted" 
          ? notCheckedTasks
              : taskState === "Favorite" 
                  ? FavoriteTasks
                    : taskState === "Completed" 
                            && CheckedTasks;

  const arrForSort = [...currentArray];

  return (
    <div className="App">
      <UpperTabs setFiltered={setFiltered} setTaskState={setTaskState} taskState={taskState} />
      <SidePanel key={activeList} activeList={activeList} />
      <div className="main-container">
        <form onSubmit={(e) => addNewTask(e)}>
          <TextField
            type="text"
            className="addtask-input"
            id="standard-basic"
            label="Введите задачу"
            value={value}
            onChange={(e) => setValue(e.target.value.trim())}
          />
        </form>
        <div className="modals" id="modals" />
        <ul className="todo-list">
          <div className="block-scroll-wrapper">
            <div className="block-scroll">
              {arrForSort.sort(sortTasks).map((todo: TaskType, index: number, todos: Array<TaskType>) => (
                <Task
                  key={todo.id}
                  index={index}
                  isFiltered={isFiltered}
                  todo={todo}
                  todos={todos}
                  activeList={activeList}
                />
              ))}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
