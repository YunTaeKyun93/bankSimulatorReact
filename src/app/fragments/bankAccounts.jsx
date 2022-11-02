import React from "react";
import styled from "styled-components";
import BankAccount from "../../components/bankAccount";
const Cont = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid yellow;
`;

const BankAccountsCont = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;
`;

const TheBankAccount = styled(BankAccount)`
`;

const NoBanksMessage = styled.p``;

const H = styled.h3``;

const BankAccounts = ({ className, logic }) => {
  return (
    <Cont className={className}>
      <H>계좌목록</H>
      {logic.banks.length === 0 && (
        <NoBanksMessage>은행계좌목록이 없습니다.</NoBanksMessage>
      )}
      <BankAccountsCont>
        {logic.banks.map((bank) => (
          <TheBankAccount />
        ))}
      </BankAccountsCont>
    </Cont>
  );
};

export default BankAccounts;
