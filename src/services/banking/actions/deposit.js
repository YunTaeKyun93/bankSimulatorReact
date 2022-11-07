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
/*
// immer 등장

const newState = produce(oldState, (draft) => {
    draft.users[3].name = 'Jack';
});
{
    users: [],
    banks: [],
}

users 3번째 엘리먼트의 이름을 바꿔라.

const index = 3;

const newState = {
    ...oldState,
    users: [
        ...oldState.users.slice(0, index),
        {
            ...oldState.users[index],
            name: newUserName,
        },
        ...oldState.users.slice(index + 1, oldState.users.length)
    ],
};


oldState.users[3].name = newUserName; 


*/
