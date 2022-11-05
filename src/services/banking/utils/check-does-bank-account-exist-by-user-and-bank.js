import BankAccountNotFoundByUserAndBankError from "../../../errors/bank-account-not-found-by-user-and-bank";

const checkDoesBankAccountExistByUserAndBank = ({state, userId, bankId}) => {
    const result = state.bankAccounts.find(
        (currentBankAccount) => {
            return currentBankAccount.userId === userId && currentBankAccount.bankId === bankId;
        }
    );

    if (result == null) {
        throw new BankAccountNotFoundByUserAndBankError({userId, bankId});
    }
};

export default checkDoesBankAccountExistByUserAndBank;
