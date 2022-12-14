import subtractMoneyFromBankAccount from '../utils/subtract-money-from-bank-account';
import produce from 'immer';

const createWithdrawsFromBank = ({state,setState})=>({userId, bankId, amount})=>{
    console.log('userId',userId)
    console.log('bankId',bankId)
    setState(oldState=>{
        return produce(oldState,(draft)=>{
            subtractMoneyFromBankAccount({draft,userId,bankId,amount});
        })
    })
}


    // setState((oldState) => {
    //     // 
    //     return produce(oldState, (draft) => {
    //         subtractMoneyFromBankAccount({draft, userId, bankId, amount});
    //     });
    // });
// };

export default createWithdrawsFromBank;
