import produce from "immer";
import subtractMoneyFromUser from "../utils/subtract-money-from-user";

const userUses =
  ({ state, setState }) =>
  ({ userId, amount }) => {
    setState((oldState) => {
      console.log('2',userId)
      return produce(oldState, (draft) => {
        subtractMoneyFromUser({ draft, userId, amount });
      });
    });
  };

export default userUses;
