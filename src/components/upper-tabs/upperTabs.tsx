import React, { FC } from "react";

import "./upperTabs.scss";

interface UpperTabsProps {
  setTaskState: (value: string) => void;
  setFiltered: (value: boolean) => void;
  taskState: string;
}

export const UpperTabs: FC<UpperTabsProps> = ({ setTaskState, setFiltered, taskState }) => {
  const showAll = (value: string) => {
    setTaskState(value);
    if (value === "allTasks") {
      setFiltered(false);
    } else setFiltered(true);
  };

  return (
    <div className="upper-buttons">
      <button
        className={taskState === "allTasks" ? "active-upper-button" : "upper-button"}
        onClick={() => showAll("allTasks")}
      >
        Все задачи
      </button>
      <button
        className={taskState === "notCompleted" ? "active-upper-button" : "upper-button"}
        onClick={() => showAll("notCompleted")}
      >
        Незавершенные
      </button>
      <button
        className={taskState === "Completed" ? "active-upper-button" : "upper-button"}
        onClick={() => showAll("Completed")}
      >
        Завершенные
      </button>
      <button
        className={taskState === "Favorite" ? "active-upper-button" : "upper-button"}
        onClick={() => showAll("Favorite")}
      >
        Важное
      </button>
    </div>
  );
};
