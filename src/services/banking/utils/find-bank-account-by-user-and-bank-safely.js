const findBankAccountByUserAndBank = ({state, userId, bankId}) => {
    return state.bankAccounts.find((account) => account.bankId === bankId && account.userId === userId);
};

export default findBankAccountByUserAndBank;
