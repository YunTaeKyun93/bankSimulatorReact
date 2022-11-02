import findBank from "./find-bank";
import findUser from "./find-user";
import accountlessWarning from './accountless warning';
/**
 * @memo findOrCreateBankAccountByUserAndBank로 찾거나 생성해서 돈을 입금
 */
const subtractMoneyFromBankAccount = ({ draft, userId, bankId, amount }) => {
  const bank = findBank(draft, bankId);
  const user = findUser(draft, userId);
  accountlessWarning({draft, userId, bankId, amount})

  console.log(accountlessWarning.bankAccount)
  bank.budget -= amount;
  user.budget += amount;
};

export default subtractMoneyFromBankAccount;
