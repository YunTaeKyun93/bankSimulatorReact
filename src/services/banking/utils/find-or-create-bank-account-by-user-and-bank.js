import createBankAccount from './create-bank-account';
import findBankAccountByUserAndBankSafely from "./find-bank-account-by-user-and-bank-safely";
/**
 *@memo state.bankAccounts에서 bankAccountId 와 userID로 이중으로 찾았는데 없으면 잔고 만드는 역할
*/
const findOrCreateBankAccountByUserAndBank = ({draft, userId, bankId}) => {
    let bankAccount = findBankAccountByUserAndBankSafely({state: draft, userId, bankId});
    if (bankAccount == null) {
        bankAccount = createBankAccount({draft, userId, bankId});
    }
   
    return bankAccount;
};

export default findOrCreateBankAccountByUserAndBank;
