/**
 *@memo state.bankAccounts에서 bankAccountId로 찾는 역할
*/
const findBankAccount = (draft, bankAccountId) => {
    return draft.bankAccounts.find((account) => account.id === bankAccountId);
};

export default findBankAccount;
