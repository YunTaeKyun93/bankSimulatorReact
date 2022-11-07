import React from "react";
import styled from "styled-components";
import UserInput from "./user-input";

const Cont = styled.div``;

const UserUse = ({
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
        placeholder="사용금액"
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
        지출
      </button>
    </Cont>
  );
};

export default UserUse;
