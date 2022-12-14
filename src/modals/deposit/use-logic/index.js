import { useState, useEffect } from "react";

const initialAmount = 0;

const useLogic = ({ deposit, isOpen, onRequestClose }) => {
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
    deposit({ userId, bankId, amount: Number(amount) });
    onRequestClose();
    console.log('submit완료')
  };
  const alertSomething =()=>{
    alert('각각의 항목을 다시 확인해주세요!');
  };

  return {
    userId,
    bankId,
    amount,
    setUserId,
    setBankId,
    setAmount,
    submit,
    alertSomething
  };
};

export default useLogic;
