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
        amount={logic.withdrawAmount}
        setUserId={logic.setUserId}
        setBankId={logic.setBankId}
        setWithdrawAmount={logic.setWithdrawAmount}
        onSubmit={logic.submit}
        alertSomething={logic.alertSomething}
      />
    </Modal>
  );
};

export default WithdrawModal;
