import { useState, useEffect, useRef } from "react";
import useBanking from "../../services/banking";
import useTestInitScript from "./use-test-init-script";

const useLogic = () => {
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithDrawModalOpen] = useState(false);
  const [showBankAccountsList , setShowBankAccountsList] = useState(false);
  const banking = useBanking();

  useTestInitScript({ banking });

  return {
    banking,
    users: banking.users,
    banks: banking.banks,
    createUser: banking.createUser,
    createBank: banking.createBank,
    deposit: banking.deposit,
    withdraw: banking.withdraw,
    bankAccountsInfo : banking.bankAccountsInfo,
    isCreateUserModalOpen,
    setIsCreateUserModalOpen,
    isDepositModalOpen,
    setIsDepositModalOpen,
    isWithdrawModalOpen,
    setIsWithDrawModalOpen,
    showBankAccountsList,
    setShowBankAccountsList,
  };
};

export default useLogic;
