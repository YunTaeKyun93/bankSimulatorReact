const checkBankAccountByBankId = ({ state, bankId }) => {
  return state.bankAccounts.find((account) => account.bankId === bankId);
};
export default checkBankAccountByBankId;
