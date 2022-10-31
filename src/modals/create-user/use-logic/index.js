import {useState, useEffect} from 'react';

const initialName = '';
const initialAge = '';
const initialCountry = 'Korea';
const initialInitialBudget = '1000';

const useLogic = ({createUser, isOpen, onRequestClose}) => {
    const [name, setName] = useState(initialName);
    const [age, setAge] = useState(initialAge);
    const [country, setCountry] = useState(initialCountry);
    const [initialBudget, setInitialBudget] = useState(initialInitialBudget);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        setName(initialName);
        setAge(initialAge);
        setCountry(initialCountry)
        setInitialBudget(initialBudget);
    }, [isOpen])

    const submit = () => {
        createUser({
            name,
            age: Number(age),
            country,
            initialBudget: Number(initialBudget),
        });
        onRequestClose();
    };

    return {
        name,
        age,
        country,
        initialBudget,
        setName,
        setAge,
        setCountry,
        setInitialBudget,
        submit,
    };
};

export default useLogic;
