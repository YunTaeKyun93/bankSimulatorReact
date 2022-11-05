import findBankAccountByUserAndBankSafely from "./find-bank-account-by-user-and-bank-safely";

const accountlessWarning = ({draft,userId,bankId}) => {
    const bankAccount = findBankAccountByUserAndBankSafely({state:draft,userId,bankId})
    if(bankAccount == null){
        alert('해당되는 계좌가 없습니다!')
    }
    return bankAccount;
};


export default accountlessWarning;
