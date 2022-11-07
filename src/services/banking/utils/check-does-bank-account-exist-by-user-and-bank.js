import BankAccountNotFoundByUserAndBankError from "../../../errors/bank-account-not-found-by-user-and-bank";
import findBankAccountByUserAndBankSafely from "./find-bank-account-by-user-and-bank-safely";
const checkDoesBankAccountExistByUserAndBank = ({draft, userId, bankId}) => {
    // const result = state.bankAccounts.find(
    //     (currentBankAccount) => {
    //         return currentBankAccount.userId === userId && currentBankAccount.bankId === bankId;
    //     }
    // );
    // console.log(result);
    const result = findBankAccountByUserAndBankSafely({state:draft , userId, bankId})

    if (result == null) {
        throw new BankAccountNotFoundByUserAndBankError({userId, bankId});
    }
    return result;
};

export default checkDoesBankAccountExistByUserAndBank;


