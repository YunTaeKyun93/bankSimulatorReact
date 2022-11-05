import React from "react";
import Modal from "react-modal";
import useLogic from "./use-logic";
import Withdraw from "../../components/withdraw";

const WithdrawModal = ({ isOpen, onRequestClose, withdraw, banking }) => {
  const logic = useLogic({ withdraw, isOpen, onRequestClose });

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
       <Withdraw
        banking={banking}
        userId={logic.userId}
        bankId={logic.bankId}
        amount={logic.amount}
        setUserId={logic.setUserId}
        setBankId={logic.setBankId}
        setAmount={logic.setAmount}
        onSubmit={logic.submit}
      />
    </Modal>
  );
};

export default WithdrawModal;
