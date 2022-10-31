import React from 'react';
import styled from 'styled-components';
import User from '../../components/user';

const Cont = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: 1px solid blue;
`;

const UsersCont = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow-y: scroll;
`;

const TheUser = styled(User)`
    margin-top: 10px;
    
    &:first-of-type {
        margin-top: 0px;
    }
`;

const NoUsersMessage = styled.p``;

const H = styled.h3``;

const Users = ({className, logic}) => {
    return (
        <Cont className={className}>
            <H>유저</H>
            {logic.users.length === 0 && <NoUsersMessage>유저가 없습니다.</NoUsersMessage>}
            <UsersCont>
                {logic.users.map((user) => {
                    return <TheUser 
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        age={user.age}
                        budget={user.budget}
                        country={user.country}
                    />;
                })}
            </UsersCont>
        </Cont>
    );
};

export default Users;
