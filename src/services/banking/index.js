import React, { useState } from "react";
import createCreateUser from "./actions/create-user";
import createCreateBank from "./actions/create-bank";
import createDeposit from "./actions/deposit";
import createWithdrow from "./actions/withdraw";
import showBankAccounts from './actions/show-bank-Accounts';
const useBanking = () => {
  const [state, setState] = useState({
    users: [],
    banks: [],
    bankAccounts: []
  });

  const createUser = createCreateUser({ state, setState });
  const createBank = createCreateBank({ state, setState });
  const deposit = createDeposit({ state, setState });
  const withdraw = createWithdrow({ state, setState });
  const bankAccountsInfo = showBankAccounts({state,setState})
  // todo add some more
console.log('bankAccounts',state.bankAccounts)
  return {
    users: state.users,
    banks: state.banks,
    createUser,
    createBank,
    deposit,
    withdraw,
    bankAccountsInfo,
  };
};

export default useBanking;
