import React from "react";
import Modal from "react-modal";
import useLogic from "./use-logic";
import UserUse from "../../components/user-use";

const UserUsesModal = ({ isOpen, onRequestClose, userUses, banking }) => {
  const logic = useLogic({ isOpen, onRequestClose, userUses });
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <UserUse
        banking={banking}
        userId={logic.userId}
        amount={logic.amount}
        setUserId={logic.setUserId}
        setAmount={logic.setAmount}
        onSubmit={logic.submit}
      />
    </Modal>
  );
};

export default UserUsesModal;
