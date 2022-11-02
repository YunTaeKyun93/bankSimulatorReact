import React from "react";
import DepositModal from "../../modals/deposit";

const Deposit = ({ logic }) => {
  return (
    <DepositModal
      isOpen={logic.isDepositModalOpen}
      onRequestClose={() => logic.setIsDepositModalOpen(false)}
      deposit={({ userId, bankId, amount }) => {
        logic.deposit({
          userId,
          bankId,
          amount
        });
      }}
      banking={logic.banking}
    />
  );
};

export default Deposit;
