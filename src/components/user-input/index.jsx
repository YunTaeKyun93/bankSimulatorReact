import React from "react";
import styled from "styled-components";

const Cont = styled.div``;

const SelectedUserName = styled.p``;

const ResetButton = styled.button``;

const Users = styled.div`
  padding: 4px;
  border: 1px solid blue;
  overflow-y: scroll;
  height: 200px;
`;

const User = styled.div`
  padding: 4px;
  border: 1px solid pink;

  margin-top: 6px;

  &:first-of-type {
    margin-top: 0px;
  }
`;
const P = styled.p``;
const UserInput = ({ className, value, setValue, banking }) => {
  const userNameById = (userId) => {
    const user = banking.users.find((currentUser) => currentUser.id === userId);
    return user.name;
  };

  return (
    <Cont className={className}>
      <SelectedUserName>
        {value == null ? "-" : userNameById(value)}
      </SelectedUserName>
      <ResetButton
        onClick={(event) => {
          event.stopPropagation();
          setValue(null);
        }}
      >
        선택해제
      </ResetButton>
      {banking.users.length === 0 && <p>유저가 없습니다</p>}
      {banking.users.length !== 0 && (
        <Users>
          <P>유저 목록</P>
          {banking.users.map((user) => {
            return (
              <User
                key={user.id}
                onClick={(event) => {
                  event.stopPropagation();
                  setValue(user.id);
                }}
              >
                {user.name}
              </User>
            );
          })}
        </Users>
      )}
    </Cont>
  );
};

export default UserInput;
