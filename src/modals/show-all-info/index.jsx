import React from "react";
import Modal from "react-modal";
import useLogic from "./use-logic";
import ShowAllInfo from "../../components/show-all-info";
const ShowAllInfoModal = ({ isOpen, onRequsetClose, showAllInfo, banking }) => {
  const logic = useLogic({ isOpen, onRequsetClose });
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequsetClose}>
      <ShowAllInfo banking={banking} onSubmit={logic.submit} />
    </Modal>
  );
};

export default ShowAllInfoModal;
