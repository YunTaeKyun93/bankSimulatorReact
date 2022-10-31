const findBankAccount = (draft, bankAccountId) => {
    return draft.bankAccounts.find((account) => account.id === bankAccountId);
};

export default findBankAccount;
