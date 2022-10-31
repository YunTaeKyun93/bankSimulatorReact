import React, {useState} from 'react';
import createCreateUser from './actions/create-user';
import createCreateBank from './actions/create-bank';
import createDeposit from './actions/deposit';

const useBanking = () => {
    const [state, setState] = useState({
        users: [],
        banks: [],
        bankAccounts: [],
    });

    const createUser = createCreateUser({state, setState});
    const createBank = createCreateBank({state, setState});
    const deposit = createDeposit({state, setState});
    // todo add some more

    return {
        users: state.users,
        banks: state.banks,
        createUser,
        createBank,
        deposit,
    };
};

export default useBanking;
