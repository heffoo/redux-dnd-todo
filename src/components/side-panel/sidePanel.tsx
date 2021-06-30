import React, { useState, FC } from "react";
import { useAppSelector } from "../../store/store";
import { ListType } from "../../types/types";
import { useDispatch } from "react-redux";
import { setActiveList, AddNewList } from "../../action/actions";
import { Button } from "@material-ui/core";

import "./sidePanel.scss";
import ModalPortal from "../modal/portal";
import { Modal } from "../modal/modal";

interface SidePanelProps {
  activeList: null | string;
}

export const SidePanel: FC<SidePanelProps> = ({ activeList }) => {
  const [isCreatingList, setCreatingList] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [onModalOpen, setModalOpen] = useState<boolean>(false);

  const lists = useAppSelector((store) => store.list);

  const dispatch = useDispatch();

  const createNewList = () => {
    setCreatingList(!isCreatingList);
    value.length ? dispatch(AddNewList(value)) : alert("the field cannot be empty");
  };

  return (
    <div className="side-panel">
      <div className="side-block-scroll-wrapper">
        <div className="side-block-scroll">
          <div className="side-lists">
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
          </div>
        </div>
      </div>
      <div className="side-add-button-container">
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
        <Button
          className="side-delete-list-button"
          variant="contained"
          color="secondary"
          onClick={() => setModalOpen(true)}
        >
          delete list
        </Button>
      )}
      {onModalOpen && (
        <ModalPortal>
          <Modal setModalOpen={setModalOpen} activeList={activeList} />
        </ModalPortal>
      )}
    </div>
  );
};
