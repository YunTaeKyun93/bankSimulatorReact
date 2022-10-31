import React from 'react';
import Modal from 'react-modal';
import useLogic from './use-logic';
import Deposit from '../../components/deposit';

const DepositModal = ({isOpen, onRequestClose, deposit, banking}) => {
    const logic = useLogic({deposit, isOpen, onRequestClose});

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <Deposit
                banking={banking}

                userId={logic.userId}
                bankId={logic.bankId}
                amount={logic.amount}
                
                setUserId={logic.setUserId}
                setBankId={logic.setBankId}
                setAmount={logic.setAmount}

                onSubmit={logic.submit}
            />
        </Modal>
    );
};

export default DepositModal;
