import React, { useState } from "react";
import createCreateUser from "./actions/create-user";
import createCreateBank from "./actions/create-bank";
import createDeposit from "./actions/deposit";
import createWithdrow from "./actions/withdraw";

const useBanking = () => {
  const [state, setState] = useState({
    users: [],
    banks: [],
    bankAccounts: [],
  });

  // 세미콜론
  // 함수는 동사형으로
  // 동사만!
  const createUser = createCreateUser({ state, setState });
  const createBank = createCreateBank({ state, setState });
  const deposit = createDeposit({ state, setState });
  const withdraw = createWithdrow({ state, setState });

  // todo add some more

  return {
    users: state.users,
    banks: state.banks,
    bankAccounts: state.bankAccounts,
    selectedBankAccount:state.selectedBankAccount,
    createUser,
    createBank,
    deposit,
    withdraw,
  };
};

export default useBanking;
