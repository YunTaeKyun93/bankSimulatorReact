import React from "react";
import Modal from "react-modal";
import useLogic from "./use-logic";
import ShowAllInfo from "../../components/show-all-info";
const ShowAllInfoModal = ({ isOpen, onRequestClose, showAllInfo, banking }) => {
  const logic = useLogic({ isOpen, onRequestClose });
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <ShowAllInfo banking={banking} onSubmit={logic.submit} />
    </Modal>
  );
};

export default ShowAllInfoModal;
