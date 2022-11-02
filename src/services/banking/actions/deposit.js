import addMoneyToBankAccount from '../utils/add-money-to-bank-account';
import produce from 'immer';

const createUserDepositsToBank = ({state, setState}) => ({userId, bankId, amount}) => {
    setState((oldState) => {
        return produce(oldState, (draft) => {
            addMoneyToBankAccount({draft, userId, bankId, amount});
        });
    });
};

export default createUserDepositsToBank;
