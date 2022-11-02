import checkBankAccountByBankId from './../utils/check-bank-account-by-userId';



const showBankAccounts = ({ state, setState }) =>  ({ bankId }) => {
const userList =  checkBankAccountByBankId({state, bankId})
return ({
    userId :userList.userId,
    
})
};

export default showBankAccounts;
