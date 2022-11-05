import React, { Fragment } from "react";
import styled from "styled-components";

const Cont = styled.div`
  border: 1px solid pink;
  padding: 8px;
  visibility: visible;
`;

const BankAccountCont = styled.div``;
const BankAccountWrpper = styled.div`
  margin: 10px 0;
  border: 1px solid pink;
  padding: 10px;
  &:first-of-type {
    margin-top: 0px;
  }
`;
const Field = styled.span`
  display: block;
`;
const Id = Field;
const Name = Field;
const Balance = Field;

const ToggleButton = styled.button``;

const BankAccount = ({ bankAccount }) => {
  return (
    <BankAccountWrpper>
      <Id>유저ID : {bankAccount.user.id}</Id>
      <Name>유저명: {bankAccount.user.name}</Name>
      <Balance>잔고 : {bankAccount.balance.toLocaleString("en-US")}원</Balance>
    </BankAccountWrpper>
    // <p>{JSON.stringify(bankAccount)}</p>
  );
};

const BankAccounts = ({
  className,
  bankAccounts,
  isOpen,
  toggleIsOpen,
  choiceBankAccount
}) => {
  // isOpen, isLoggedIn, isActiveUser

  return (
    <Cont className={className}>
      {isOpen && (
        <BankAccountCont>
          {bankAccounts.map((bankAccount) => {
            return <BankAccount bankAccount={bankAccount} />;
          })}
        </BankAccountCont>
      )}
      {isOpen && bankAccounts.length === 0 && <p>없습니다</p>}
      {/* {isOpen ? (
        isLoggedIn ? (
          isAcitveUser ? (
            <p>의미 있음</p>
          ) : (
            <p>활성 유저만 볼 수 있음</p>
          )
        ) : (
          <p>로그인을 해주세요</p>
        )
      ) : (
        null
      )}

      {isOpen && isLoggedIn && isActiveUser && // 서비스를 사용할 수 있는 유저
        <p>의미 있음</p>
      }
      {isOpen && isLoggedIn && !isActiveUser && // 활성만 안 되어 있음
        <p>활성 유저만 볼 수 있음</p>
      }
      {isOpen && !isLoggedIn && // 로그인이 필요
        <p>로그인을 해주세요</p>
      } */}
      <div>
        <ToggleButton onClick={toggleIsOpen}>
          {isOpen ? "닫기" : "열기"}
        </ToggleButton>
        {/* <p>{bankAccounts.length}명</p> */}
      </div>
    </Cont>
  );
};

export default BankAccounts;

/*

Component: BankAccount(logic)registeredUsers.find

Page: MainPage(logic.users), StatusPage(logic.users) logic.users
logic.registeredUsers, logic.unregisteredUsers

BankAccount: A

MainPage: X
StatusPage: Y

X -> A
Y -> A
//Z -> A
Z -> A`
M -> A
N -> A

A`

deprecated: 더 이상 사용하지 마라!

A -> X
X -> A
Y -> A
A -> Y

*/

/* 

app -> services
app -> components

useBanking(service) -> bankAccounts(props)
*/
