import React from "react";
import styled from "styled-components";
import UserInput from "./user-input";
import BankInput from "./bank-input";

const Cont = styled.div``;


const Withdraw = ({
  className,
  userId,
  bankId,
  amount,
  setUserId,
  setBankId,
  setWithdrawAmount,
  onSubmit,
  banking,
  // alertSomething
}) => {
  return (
    <Cont className={className}>
      <UserInput value={userId} setValue={setUserId} banking={banking} />
      <BankInput value={bankId} setValue={setBankId} banking={banking} />
      <input
        type="number"
        placeholder="출금액"
        value={amount}
        onChange={(event) => {
          setWithdrawAmount(event.target.value);
        }}
      />
      <button
        onClick={(event) => {
          event.stopPropagation();
          onSubmit();
          // onSubmit == null ? alertSomething() : onSubmit();
        }}
      >
        출금
      </button>
    </Cont>
  );
};

export default Withdraw;
