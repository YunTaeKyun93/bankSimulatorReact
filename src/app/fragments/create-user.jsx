import React from 'react';
import CreateUserModal from '../../modals/create-user';

const CreateUser = ({logic}) => {
    return (
        <CreateUserModal
            isOpen={logic.isCreateUserModalOpen}
            onRequestClose={() => logic.setIsCreateUserModalOpen(false)}
            createUser={({
                name, 
                age, 
                country, 
                initialBudget
            }) => {
                logic.createUser({
                    name, 
                    age, 
                    country, 
                    initialBudget,
                });
            }}
        />
    );
};

export default CreateUser;
