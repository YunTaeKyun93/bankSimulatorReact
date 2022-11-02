/**
 *@memo state.bankAccounts에서 bankAccountId 와 userID로 이중으로 찾는역할
*/
const findBankAccountByUserAndBank = ({state, userId, bankId}) => {
    return state.bankAccounts.find((account) => account.bankId === bankId && account.userId === userId);
        
    
};

export default findBankAccountByUserAndBank;


