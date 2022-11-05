import checkBankAccountByBankId from '../utils/check-bank-account-by-user-id';



const showBankAccounts = ({ state, setState }) =>  ({ bankId }) => {
const userList =  checkBankAccountByBankId({state, bankId})
return ({
    userId :userList.userId,
    
})
};

export default showBankAccounts;
