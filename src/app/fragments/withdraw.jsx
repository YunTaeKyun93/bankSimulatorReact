import React from "react";
import WithdrawModal from "../../modals/withdraw";

const Withdraw = ({ logic }) => {
  return (
    <WithdrawModal
      isOpen={logic.isWithdrawModalOpen}
      onRequestClose={() => logic.setIsWithDrawModalOpen(false)}
      withdraw={({ userId, bankId, amount }) => {
        logic.withdraw({ userId, bankId, amount });
      }}
      banking={logic.banking}
    />
  );
};

export default Withdraw;
// (a,b,c)=>{
//   logic.withdraw({a,b,c})
// }