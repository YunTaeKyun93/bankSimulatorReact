import { useState, useEffect, useRef } from "react";
import useBanking from "../../services/banking";
import useTestInitScript from "./use-test-init-script";

const useLogic = () => {
    const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
    const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
    const banking = useBanking();

    useTestInitScript({banking});
    
    return {
        banking,
        users: banking.users,
        banks: banking.banks,
        createUser: banking.createUser,
        createBank: banking.createBank,
        deposit: banking.deposit,
        isCreateUserModalOpen,
        setIsCreateUserModalOpen,
        isDepositModalOpen,
        setIsDepositModalOpen,
    };
};

export default useLogic;
