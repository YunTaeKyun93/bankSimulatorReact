import findUserById from "../utils/find-user";
const CreateShowBankAccounts = (state, setState) => (bank) => {
  const choiceBankAccount = state.bankAccount
    .filter((bankAccount) => bankAccount.id == bank.id)
    .map((bankAccount) => {
      const bankAccountOwner = findUserById(bankAccount.userId);
      return {
        id: bankAccount,
        user: {
          id: bankAccountOwner.id,
          name: bankAccountOwner.name
        },
        balance: bankAccount.balance
      };
    });
};
export default CreateShowBankAccounts;
