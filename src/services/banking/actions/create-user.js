import {v4 as uuid} from 'uuid';

const createCreateUser = ({state, setState}) => ({name, age, country, initialBudget}) => {
    const newUser = {
        id: uuid(),
        name,
        age,
        country,
        budget: initialBudget,
    };

    setState((oldState) => {
        return {...oldState, users: [...oldState.users, newUser]};
    });

    return newUser;
};

export default createCreateUser;
