/**
 *@memo state.user 에서userId로 bank찾는 역할
*/
const findUser = (state, userId) => {
  return state.users.find((user) => user.id === userId);
};

export default findUser;
