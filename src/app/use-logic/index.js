import { useState, useEffect, useRef } from "react";
import useBanking from "../../services/banking";
import useTestInitScript from "./use-test-init-script";
import BankAccountNotFoundByUserAndBankError from "../../errors/bank-account-not-found-by-user-and-bank";

const useLogic = () => {
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithDrawModalOpen] = useState(false);
  const [isBankAccountsVisible, setIsBankAccountsVisible] = useState({});
  // console.log(isBankAccountsVisible);

  const banking = useBanking();

  useTestInitScript({ banking });

  // const [count, setCount] = useState(0);
  // const addCount = () => {
  //   setCount(oldCount => oldCount + 1);
  // };

  // 완전 대체: 함수 X [newUser1, newUser2, newUser3]
  // 이전 값 의존: 함수 O [...users, newUser]

  const toggleIsBankAccountVisible = (bankId) => {
    setIsBankAccountsVisible((oldState) => {
      // console.log("oldState", oldState);
      const copy = {
        ...oldState,
        [bankId]: !oldState[bankId]
      };
      // console.log(copy);

      return copy;
    });
  };

  // const withdraw = ({ userId, bankId, amount }) => {
  //   console.log("??????");
  //   try {
  //     banking.withdraw({ userId, bankId, amount });
  //   } catch (error) {
  //     console.log("Is this called?", error);
  //     if (error instanceof BankAccountNotFoundByUserAndBankError) {
  //       alert(
  //         `계좌를 찾을 수 없습니다. (유저 아이디: ${error.userId}, 은행 아이디: ${error.bankId})`
  //       );
  //       return;
  //     }

  //     throw error;
  //   }
  // };

  return {
    banking,
    users: banking.users,
    banks: banking.banks,
    bankAccounts: banking.bankAccounts,
    selectedBankAccount: banking.selectedBankAccount,
    createUser: banking.createUser,
    createBank: banking.createBank,
    deposit: banking.deposit,
    withdraw: banking.withdraw,
    
    isCreateUserModalOpen,
    setIsCreateUserModalOpen,
    isDepositModalOpen,
    setIsDepositModalOpen,
    isWithdrawModalOpen,
    setIsWithDrawModalOpen,
    isBankAccountsVisible,
    toggleIsBankAccountVisible
  };
};

export default useLogic;
