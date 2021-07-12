import React, { FC } from "react";
import { useStores } from "../mobXstore/context";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import "./modal.scss";
import { observer } from "mobx-react";

interface ModalProps {
  setModalOpen: any;
  activeList: string | null;
}

export const Modal = observer(({ setModalOpen, activeList }: ModalProps) => {
  const rootStore = useStores();

  const removeList = () => {
    rootStore.activeList.deleteActiveList();
    rootStore.todo.deleteList(activeList);
    closeModal();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal">
      <p className="modal-text">are you sure you want to delete list? </p>
      <CloseIcon className="close-modal-button task-button" onClick={closeModal} />
      <div className="modal-buttons">
        <Button variant="contained" color="secondary" onClick={() => removeList()}>
          Yes
        </Button>
        <Button variant="contained" onClick={closeModal}>
          No
        </Button>
      </div>
    </div>
  );
});
