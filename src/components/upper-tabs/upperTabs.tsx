import React, { FC } from "react";
import { TaskType } from "../../types/types";

import "./upperTabs.scss";

interface UpperTabsProps {
  todos: Array<TaskType>;
  setTaskState: (value: string) => void;
  setFiltered: (value: boolean) => void;
}

export const UpperTabs: FC<UpperTabsProps> = ({ setTaskState, setFiltered }) => {
  const showAll = (value: string) => {
    setTaskState(value);
    if (value === "allTasks") {
      setFiltered(false);
    } else setFiltered(true);
  };

  return (
    <div className="upper-buttons">
      <button className="upper-button" onClick={() => showAll("allTasks")}>
        Все задачи
      </button>
      <button className="upper-button" onClick={() => showAll("notCompleted")}>
        Незавершенные
      </button>
      <button className="upper-button" onClick={() => showAll("Completed")}>
        Завершенные
      </button>
      <button className="upper-button" onClick={() => showAll("Favorite")}>
        Важное
      </button>
    </div>
  );
};
