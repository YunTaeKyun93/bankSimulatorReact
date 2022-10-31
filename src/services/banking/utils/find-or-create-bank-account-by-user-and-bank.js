import createBankAccount from './create-bank-account';
import findBankAccountByUserAndBankSafely from "./find-bank-account-by-user-and-bank-safely";

const findOrCreateBankAccountByUserAndBank = ({draft, userId, bankId}) => {
    let bankAccount = findBankAccountByUserAndBankSafely({state: draft, userId, bankId});
    if (bankAccount == null) {
        bankAccount = createBankAccount({draft, userId, bankId});
    }
    return bankAccount;
};

export default findOrCreateBankAccountByUserAndBank;
