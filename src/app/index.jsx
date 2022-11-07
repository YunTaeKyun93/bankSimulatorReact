import React from 'react';
import styled from 'styled-components';
import useLogic from './use-logic'; // 
import Actions from './fragments/actions';
import Users from './fragments/users';
import Banks from './fragments/banks';
import CreateUserFragment from './fragments/create-user';
import DepositFragment from './fragments/deposit';
import WithdrawFragment from './fragments/withdraw';
import UserEarnsFragment from './fragments/user-earns';
import UserUsesFragment from './fragments/user-uses';
import ShowAllInfos from './fragments/show-all-infos';

const Cont = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
    box-sizing: border-box;
`;

const TheActions = styled(Actions)`
`;

const Data = styled.div`
    margin-top: 10px;
    display: flex;
    flex: 1;
`;

const TheUsers = styled(Users)`
    flex: 1;
`;

const TheBanks = styled(Banks)`
    margin-left: 10px;
    flex: 1;
`;


const App = () => {
    const logic = useLogic();

    return (
        <Cont>
            {/* UI */}
            <TheActions logic={logic}/>
            <Data>
                <TheUsers logic={logic}/>
                <TheBanks logic={logic}/>
            </Data> 

            {/* 모달 */}
            <CreateUserFragment logic={logic}/>
            <DepositFragment logic={logic}/>
            <WithdrawFragment logic={logic}/>
            <UserEarnsFragment logic={logic}/>
            <UserUsesFragment logic={logic}/>
            <ShowAllInfos logic={logic}/>
        </Cont>
    );
};

export default App;
