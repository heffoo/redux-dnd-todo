import React, { useState, DragEvent } from "react";
import { TaskType } from "./mobXstore/types";
import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";

import star from "../images/star.png";
import starLiked from "../images/starliked.png";
import { useStores } from "./mobXstore/context";
import { observer } from "mobx-react";

import "./Task.scss";

interface TaskProps {
  todo: TaskType;
  index: number;
  todos: Array<TaskType>;
  isFiltered: boolean;
  activeList: string | null;
}

let currentTask: TaskType | null = null;

export const Task = observer(({ todo, todos, isFiltered, activeList }: TaskProps) => {
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const rootStore = useStores();

  const editTaskInput = React.useRef<HTMLInputElement | null>(null);

  const deleteTask = (id: string) => {
    rootStore.todo.delTask(id, activeList);
  };

  const toggTask = (id: string) => {
    rootStore.todo.toggleTask(id, activeList);
  };

  const setLike = (id: string) => {
    rootStore.todo.setFavorite(id, activeList);
  };

  const editFunc = (id: string) => {
    if (editTaskInput.current?.value.length) {
      rootStore.todo.editTask(id, editTaskInput.current?.value, activeList);
      setEditMode(!isEditMode);
    }
  };

  const onDragStartHandler = (todo: TaskType) => {
    currentTask = todo;
  };

  const onDragEndHandler = (e: DragEvent<HTMLLIElement>) => {
    e.currentTarget.style.transition = "0.3s";
    e.currentTarget.style.background = "white";
  };

  const onDragOverHandler = (e: DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    e.currentTarget.style.background = "lightgray";
  };

  const onDropHandler = (e: DragEvent<HTMLLIElement>, todo: TaskType) => {
    e.preventDefault();

    const todoMapped = todos.map((c: TaskType) => {
      if (c.id === todo.id) {
        return { ...c, order: currentTask?.order ?? 0 };
      }
      if (c.id === currentTask?.id) {
        return { ...c, order: todo.order };
      }
      return c;
    });
    rootStore.todo.setTasks(todoMapped, activeList);
    e.currentTarget.style.background = "white";
  };

  return (
    <li
      className="one-task"
      draggable={!isFiltered}
      onDragStart={() => onDragStartHandler(todo)}
      onDragLeave={(e) => onDragEndHandler(e)}
      onDragEnd={(e) => onDragEndHandler(e)}
      onDragOver={(e) => onDragOverHandler(e)}
      onDrop={(e) => onDropHandler(e, todo)}
    >
      <div className="task-title">
        <button className="like-button">
          <img
            className="button-star"
            alt="img"
            src={todo.isFavorite ? starLiked : star}
            onClick={() => setLike(todo.id)}
          />
        </button>
        <Checkbox
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          checked={todo.completed}
          onChange={() => toggTask(todo.id)}
        />
        {!isEditMode ? (
          <p onDoubleClick={() => setEditMode(!isEditMode)}>{todo.title}</p>
        ) : (
          <input
            type="text"
            className="editTaskInput"
            defaultValue={todo.title.trim()}
            ref={editTaskInput}
            onKeyPress={(e) => e.key === "Enter" && editFunc(todo.id)}
          />
        )}
      </div>

      <div className="task-buttons">
        {!isEditMode ? (
          <EditIcon className="task-button" onClick={() => setEditMode(!isEditMode)} />
        ) : (
          <SaveIcon className="task-button" onClick={() => editFunc(todo.id)} />
        )}
        <CloseIcon className="task-button" onClick={() => deleteTask(todo.id)} />
      </div>
    </li>
  );
});
