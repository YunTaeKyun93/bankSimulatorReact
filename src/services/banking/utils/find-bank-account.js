/**
 *@memo state.bankAccounts에서 bankAccountId로 찾는 역할
*/
const findBankAccount = (state, bankAccountId) => {
    return state.bankAccounts.find((account) => account.id === bankAccountId);
};

export default findBankAccount;

/*
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

// immer 등장

const newState = produce(oldState, (draft) => {
    draft.users[3].name = 'Jack';
});
*/
