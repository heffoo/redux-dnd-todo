import React, { useState, FC } from "react";
import { useAppSelector } from "../../store/store";
import { ListType } from "../../types/types";
import { useDispatch } from "react-redux";
import { setActiveList, AddNewList, deleteList } from "../../action/actions";
import { Button } from "@material-ui/core";

import "./sidePanel.scss";

interface SidePanelProps {
  activeList: string;
}

export const SidePanel: FC<SidePanelProps> = ({activeList}) => {
  const [isCreatingList, setCreatingList] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const lists = useAppSelector((store) => store.list);

  const dispatch = useDispatch();

  const createNewList = () => {
    setCreatingList(!isCreatingList);
    dispatch(AddNewList(value));
  };

  return (
    <div className="side-panel">
      <div className="buttons">
        {lists.map((list: ListType) => {
          return (
            <div key={list.id}>
              <button
                id={list.id}
                className={activeList !== list.id ? "side-button-list" : "side-button-list button-active"}
                onClick={() => dispatch(setActiveList(list.id))}
              >
                {list.title}
              </button>
            </div>
          );
        })}
        {!isCreatingList ? (
          <button className="side-add-list-button" onClick={() => setCreatingList(!isCreatingList)}>
            +
          </button>
        ) : (
          <form onSubmit={() => createNewList()}>
            <input className="new-list-input" onChange={(e) => setValue(e.target.value.trim())} />
          </form>
        )}
      </div>
      {activeList && (
        <Button variant="contained" color="secondary" onClick={() => dispatch(deleteList(activeList))}>
          delete list
        </Button>
      )}
    </div>
  );
};
