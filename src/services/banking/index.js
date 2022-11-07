import React, { useState } from "react";
import createCreateUser from "./actions/create-user";
import createCreateBank from "./actions/create-bank";
import createDeposit from "./actions/deposit";
import createWithdrow from "./actions/withdraw";
import createUserEarns from "./actions/user-earns";
import createUserUses from './actions/user-uses';
import createShowAllInfo from './actions/show-all-info';
const useBanking = () => {
  const [state, setState] = useState({
    users: [],
    banks: [],
    bankAccounts: []
  });

  // 세미콜론
  // 함수는 동사형으로
  // 동사만!
  const createUser = createCreateUser({ state, setState });
  const createBank = createCreateBank({ state, setState });
  const deposit = createDeposit({ state, setState });
  const withdraw = createWithdrow({ state, setState });
  const userEarns = createUserEarns({ state, setState });
  const userUses = createUserUses({state, setState});
  const showAllInfo = createShowAllInfo({state,setState})
  // todo add some more

  return {
    users: state.users,
    banks: state.banks,
    bankAccounts: state.bankAccounts,
    createUser,
    createBank,
    deposit,
    withdraw,
    userEarns,
    userUses,
    showAllInfo,
  };
};

export default useBanking;
