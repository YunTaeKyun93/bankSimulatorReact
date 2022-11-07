import React from "react";
import styled from "styled-components";
const Cont = styled.div`
  padding: 8px;
`;

const ShowAllInfo = ({ className, banking, onSubmit }) => {
  return (
    <Cont className={className}>
      <button
        onClick={(event) => {
          event.stopPropagation();
          onSubmit();
        }}
      >
        닫기
      </button>
      {banking.users.map((user)=>(
        <p>{user.name}</p>
      ))}
    </Cont>
  );
};

export default ShowAllInfo;
