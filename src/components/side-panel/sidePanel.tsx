import React, { useState } from "react";

import { ListType } from "../mobXstore/types";
import { Button } from "@material-ui/core";
import { Modal } from "../modal/modal";
import { observer } from "mobx-react";
import { useStores } from "../mobXstore/context";
import { toJS } from "mobx";

import ModalPortal from "../modal/portal";

import "./sidePanel.scss";

interface SidePanelProps {
  activeList: null | string;
}

export const SidePanel = observer(({ activeList }: SidePanelProps) => {
  const [isCreatingList, setCreatingList] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [onModalOpen, setModalOpen] = useState<boolean>(false);

  const rootStore = useStores();
  const createNewList = () => {
    setCreatingList(!isCreatingList);
    value.length ? rootStore.todo.addNewList(value) : alert("the field cannot be empty");
    rootStore.activeList.setActiveList(toJS(rootStore.todo.lists)[rootStore.todo.lists.length - 1].id);
  };

  return (
    <div className="side-panel">
      <div className="side-block-scroll-wrapper">
        <div className="side-block-scroll">
          <div className="side-lists">
            {rootStore.todo.lists.map((list: ListType) => {
              return (
                <div key={list.id}>
                  <button
                    id={list.id}
                    className={activeList !== list.id ? "side-button-list" : "side-button-list button-active"}
                    onClick={() => {
                      rootStore.activeList.setActiveList(list.id);
                    }}
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
});
