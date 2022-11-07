import React from "react";
import styled from "styled-components";
import UserInput from "./user-input/index";

const Cont = styled.div``;

const UserEarn = ({
  className,
  banking,
  userId,
  amount,
  setUserId,
  setAmount,
  onSubmit
}) => {
  return (
    <Cont className={className}>
      <UserInput value={userId} setValue={setUserId} banking={banking} />
      <input
        type="number"
        placeholder="입금액"
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <button
        onClick={(event) => {
          event.stopPropagation();
          onSubmit();
        }}
      >
        입금
      </button>
    </Cont>
  );
};

export default UserEarn;
