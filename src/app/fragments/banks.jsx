import React, { Fragment } from "react";
import styled from "styled-components";
import Bank from "../../components/bank";
 import BankAccounts from "../../components/bank-accounts";

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
  font-size: 14px;
  background-color: gray;
  margin: 0;
`;

const getBankAccountsForDumbComp = (logic, bank) => {
  const findUserById = (userId) =>
    logic.users.find((currentUser) => currentUser.id === userId);

    return logic.bankAccounts
    .filter((bankAccount) => bankAccount.bankId === bank.id)
    .map((bankAccount) => {
      const bankAccountOwner = findUserById(bankAccount.userId);
      return {
        id: bankAccount.id,
        user: {
          id: bankAccountOwner.id,
          name: bankAccountOwner.name
        },
        balance: bankAccount.balance
      };
    })
}

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
              id={bank.id}
              name={bank.name}
              dailyInterestRate={bank.dailyInterestRate}
              budget={bank.budget}
              logic={logic}
            />
            <TheBankAccounts
              isOpen={logic.isBankAccountsVisible[bank.id]}
              toggleIsOpen={() => logic.toggleIsBankAccountVisible(bank.id)}
              bankAccounts={getBankAccountsForDumbComp(logic, bank)}
            />
          </Fragment>
        ))}
      </BanksCont>
    </Cont>
  );
};

export default Banks;
