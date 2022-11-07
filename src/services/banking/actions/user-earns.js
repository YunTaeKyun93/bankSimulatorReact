import produce from "immer";
import addMoneyToUser from '../utils/add-money-to-user'
const userEarns =
  ({ state, setState }) =>
  ({ userId, amount }) => {
    setState((oldState) => {
      return produce(oldState, (draft) => {
        addMoneyToUser({ draft, userId, amount });
      });
    });
  };

export default userEarns;
