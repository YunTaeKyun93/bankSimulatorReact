import { v4 as uuid } from "uuid";
/**
 *@memo state.bankAccounts로 새로운 잔고 생성
 */
const createBankAccount = ({ draft, userId, bankId }) => {
  const newBank = {
    id: uuid(),
    userId,
    bankId,
    balance: 0
  };

  draft.bankAccounts.push(newBank);

  return newBank;
};

export default createBankAccount;
