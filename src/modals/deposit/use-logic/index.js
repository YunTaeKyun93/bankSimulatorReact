import {useState, useEffect} from 'react';

const initialAmount = 0;

const useLogic = ({deposit, isOpen, onRequestClose}) => {
    const [userId, setUserId] = useState(null);
    const [bankId, setBankId] = useState(null);
    const [amount, setAmount] = useState(initialAmount);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        setUserId(null);
        setBankId(null);
        setAmount(initialAmount);
    }, [isOpen]);

    const submit = () => {
        deposit({userId, bankId, amount: Number(amount)});
        onRequestClose();
    };

    return {
        userId,
        bankId,
        amount,
        setUserId,
        setBankId,
        setAmount,
        submit,
    };
};

export default useLogic;
