import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { deleteList } from "../../toolkitRedux/todoSlice";

import "./modal.scss";

interface ModalProps {
  setModalOpen: any;
  activeList: null | string;
}

export const Modal: FC<ModalProps> = ({ setModalOpen, activeList }) => {
  const dispatch = useDispatch();

  const removeList = () => {
    dispatch(deleteList({ listId: activeList }));
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
};
