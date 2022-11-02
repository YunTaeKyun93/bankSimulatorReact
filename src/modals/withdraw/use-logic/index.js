import React, { useState, useEffect } from "react";

const initialAmount = 0;

const useLogic = ({ withdraw, isOpen, onRequestClose }) => {
  const [userId, setUserId] = useState(null);
  const [bankId, setBankId] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState(initialAmount);

  useEffect(() => {
    if (!isOpen) return;
    setUserId(null);
    setBankId(null);
    setWithdrawAmount(null);
  }, [isOpen]);

  const submit = () => {
    withdraw({ userId, bankId, withdrawAmount: Number(withdrawAmount) });
    onRequestClose();
    console.log('submit완료')

  };
  const alertSomething =()=>{
    alert('각각의 항목을 다시 확인해주세요!');
  }

  return {
    userId,
    bankId,
    withdrawAmount,
    setUserId,
    setBankId,
    setWithdrawAmount,
    submit,
    alertSomething
  };
};

export default useLogic;
