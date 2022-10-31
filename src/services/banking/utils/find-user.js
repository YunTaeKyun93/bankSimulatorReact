const findUser = (state, userId) => {
    return state.users.find((user) => user.id === userId);
};

export default findUser;
