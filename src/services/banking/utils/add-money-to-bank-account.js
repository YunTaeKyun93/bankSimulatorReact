import findBank from "./find-bank";
import findUser from "./find-user";
import findOrCreateBankAccountByUserAndBank from "./find-or-create-bank-account-by-user-and-bank";
/**
 * @memo findOrCreateBankAccountByUserAndBank로 찾거나 생성해서 돈을 입금
 */
const addMoneyToBankAccount = ({ draft, userId, bankId, amount }) => {
  const bank = findBank(draft, bankId);
  const user = findUser(draft, userId);

  const bankAccount = findOrCreateBankAccountByUserAndBank({
    draft,
    userId,
    bankId
  });
  bankAccount.balance += amount;
  bank.budget += amount;
  user.budget -= amount;
  console.log('2',bankAccount);
};

export default addMoneyToBankAccount;
