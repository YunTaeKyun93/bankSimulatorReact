import findUser from "./find-user";
/**
 * @memo findOrCreateBankAccountByUserAndBank로 찾거나 생성해서 돈을 입금
 */
const addMoneyToUser = ({ draft, userId, amount }) => {
  const user = findUser(draft, userId);
  user.budget += amount;
};

export default addMoneyToUser;
