import produce from "immer";
import subtractMoneyFromUser from "../utils/subtract-money-from-user";

const userUses =
  ({ state, setState }) =>
  ({ userId, amount }) => {
    setState((oldState) => {
      return produce(oldState, (draft) => {
        subtractMoneyFromUser({ draft: state, userId, amount });
      });
    });
  };

export default userUses;
