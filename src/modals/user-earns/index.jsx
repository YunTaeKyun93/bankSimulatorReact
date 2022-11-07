import React from "react";
import Modal from "react-modal";
import useLogic from "./use-logic";
import UserEarn from "../../components/user-earn";

const UserEarnsModal = ({ isOpen, onRequestClose, userEarns, banking }) => {
  const logic = useLogic({ userEarns, isOpen, onRequestClose });
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <UserEarn
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

export default UserEarnsModal;
