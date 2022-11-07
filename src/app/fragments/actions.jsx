import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  padding: 10px;
  border: 1px solid blue;
  
`;

const ActionsCont = styled.div`
  display: flex;
`;

const Action = styled.button`
  margin-left: 8px;

  &:first-of-type {
    margin-left: 0px;
  }
`;

const H = styled.h3``;

const Actions = ({ className, logic }) => {
  return (
    <Cont className={className}>
      <H>실행</H>
      <ActionsCont>
        <Action
          onClick={(event) => {
            event.stopPropagation();
            logic.setIsCreateUserModalOpen(true);
          }}
        >
          유저 생성
        </Action>
        <Action
          onClick={(event) => {
            event.stopPropagation();
            logic.setIsDepositModalOpen(true);
          }}
        >
          입금
        </Action>
        <Action
          onClick={(event) => {
            event.stopPropagation();
            logic.setIsWithDrawModalOpen(true);
          }}
        >
          출금
        </Action>
        <Action
          onClick={(event) => {
            event.stopPropagation();
           logic.setIsUserEarnsModalOpen(true)
          }}
        >
          UserEarns
        </Action>  
        <Action
          onClick={(event) => {
            event.stopPropagation();
            logic.setIsUserUsesModalOpen(true)
          }}
        >
          UserUses
        </Action>  
      </ActionsCont>
    </Cont>
  );
};

export default Actions;
