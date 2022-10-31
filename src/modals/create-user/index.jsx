import React from 'react';
import Modal from 'react-modal';
import useLogic from './use-logic';
import CreateUser from '../../components/create-user';

const CreateUserModal = ({isOpen, onRequestClose, createUser}) => {
    const logic = useLogic({createUser, isOpen, onRequestClose});

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <CreateUser
                name={logic.name}
                age={logic.age}
                country={logic.country}
                initialBudget={logic.initialBudget}
                
                setName={logic.setName}
                setAge={logic.setAge}
                setCountry={logic.setCountry}
                setInitialBudget={logic.setInitialBudget}

                onSubmit={logic.submit}
            />
        </Modal>
    );
};

export default CreateUserModal;
