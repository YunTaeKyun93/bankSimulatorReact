const findBank = (state, bankId) => {
    return state.banks.find((bank) => bank.id === bankId);
};

export default findBank;
