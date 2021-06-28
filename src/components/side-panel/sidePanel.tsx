import React, { useState, FC } from "react";
import { useAppSelector } from "../../store/store";
import { ListType } from "../../types/types";
import { useDispatch } from "react-redux";

import "./sidePanel.scss";
import { setActiveList, AddNewList } from "../../action/actions";

interface Props {}

export const SidePanel: FC<Props> = () => {
  const lists = useAppSelector((store) => store.list);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  // const activeList = useAppSelector((store) => store.app.activeList);

  const [isCreatingList, setCreatingList] = useState<boolean>(false);

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
              <button className="side-button-list" onClick={() => dispatch(setActiveList(list.id))}>
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
            <input onChange={(e) => setValue(e.target.value.trim())} />
          </form>
        )}

        {/* <button onClick={() => dispatch(getValue(list.id))}>new Button</button> */}
      </div>
    </div>
  );
};
