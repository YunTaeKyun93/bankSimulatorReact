/**
 *@memo state.bank 에서 bankId로 bank찾는 역할
*/
const findBank = (state, bankId) => {
    return state.banks.find((bank) => bank.id === bankId);
};

export default findBank;
