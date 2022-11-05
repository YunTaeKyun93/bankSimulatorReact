import { useState, useEffect } from "react";

const initialAmount = "";

const useLogic = ({ withdraw, isOpen, onRequestClose }) => {
  const [userId, setUserId] = useState(null);
  const [bankId, setBankId] = useState(null);
  const [amount, setAmount] = useState(initialAmount);

  useEffect(() => {
    if (!isOpen) return;
    setUserId(null);
    setBankId(null);
    setAmount(initialAmount);
  }, [isOpen]);

  const submit = () => {
    if (userId == null) {
      alert("유저를 입력해주세요!");
      return;
    }

    if (bankId == null) {
      alert("은행을 입력해주세요!");
      return;
    }

    const withdrawAmountIsNotANumber = Number.isNaN(Number(amount));
    if (withdrawAmountIsNotANumber) {
      alert("출금액을 정확하게 입력해주세요!");
      return;
    }

    // if (Number(withdrawAmount) < 1) {
    //   alert('출금액은 0보다 커야합니다');
    //   return;
    // }

    withdraw({ userId, bankId, amount: Number(amount) });
    onRequestClose();
    console.log("submit완료");
  };

  return {
    userId,
    bankId,
    amount,
    setUserId,
    setBankId,
    setAmount,
    submit
    // alertSomething
  };
};

export default useLogic;
