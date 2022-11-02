import React, { Fragment } from "react";
import styled from "styled-components";
import Bank from "../../components/bank";
import BankAccounts from "../../components/bankAccount";

const Cont = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid blue;
`;

const BanksCont = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;
`;

const TheBank = styled(Bank)`
  margin-top: 10px;
  color: #fff;
  &:first-of-type {
    margin-top: 0px;
  }
`;
const TheBankAccounts = styled(BankAccounts)``;

const NoBanksMessage = styled.p``;

const H = styled.h3``;
const P = styled.p`
  cursor: pointer;
  padding: 8px;
  font-weight: 600;
  font-size: 1vw;
  background-color: gray;
  margin: 0;
`;
const Banks = ({ className, logic }) => {
  return (
    <Cont className={className}>
      <H>은행</H>
      {logic.banks.length === 0 && (
        <NoBanksMessage>은행이 없습니다.</NoBanksMessage>
      )}
      <BanksCont>
        {logic.banks.map((bank) => (
          <Fragment key={bank.id}>
            <TheBank
              key={bank.id}
              id={bank.id}
              name={bank.name}
              dailyInterestRate={bank.dailyInterestRate}
              budget={bank.budget}
              logic={logic}
            />
            <P>계좌보기</P>
            <TheBankAccounts logic={logic} />
          </Fragment>
        ))}
      </BanksCont>
    </Cont>
  );
};

export default Banks;
