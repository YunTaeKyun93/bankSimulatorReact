import findUser from './find-user';

const subtractMoneyFromUser =({draft, userId, amount})=>{
    const user =  findUser(draft, userId);

    user.budget -= amount;   
}

export default subtractMoneyFromUser;