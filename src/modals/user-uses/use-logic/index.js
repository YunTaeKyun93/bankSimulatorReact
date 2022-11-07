import { useState, useEffect } from "react";

const initialAmount = "";

const useLogic = ({ isOpen, onRequestClose, userUses }) => {
  const [userId, setUserId] = useState(null);
  const [amount, setAmount] = useState(initialAmount);

  useEffect(() => {
    if (!isOpen) return;
    setUserId(null);
    setAmount(initialAmount);
  }, [isOpen]);

  const submit = () => {
    if (userId == null) {
      alert("유저를 입력해주세요");
      return;
    }
    userUses({ userId, amount: Number(amount) });
    onRequestClose();
  };
  return {
    userId,
    amount,
    setUserId,
    setAmount,
    submit
  };
};
export default useLogic;
