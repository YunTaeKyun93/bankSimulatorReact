import {v4 as uuid} from 'uuid';

const createBankAccount = ({draft, userId, bankId}) => {
    const newBank = {
        id: uuid(),
        userId,
        bankId,
        balance: 0,
    };

    draft.bankAccounts.push();

    return newBank;
};

export default createBankAccount;
