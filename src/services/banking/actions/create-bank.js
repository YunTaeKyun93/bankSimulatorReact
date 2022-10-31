import {v4 as uuid} from 'uuid';

const createCreateBank = ({state, setState}) => ({name, dailyInterestRate, initialBudget}) => {
    const newBank = {
        id: uuid(),
        name,
        dailyInterestRate,
        budget: initialBudget,
    };

    setState((oldState) => {
        return {...oldState, banks: [...oldState.banks, newBank]};
    });

    return newBank;
};

export default createCreateBank;
