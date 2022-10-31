import React from 'react';
import styled from 'styled-components';
import Bank from '../../components/bank';

const Cont = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: 1px solid blue;
`;

const BanksCont = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow-y: scroll;
`;

const TheBank = styled(Bank)`
    margin-top: 10px;
    
    &:first-of-type {
        margin-top: 0px;
    }
`;

const NoBanksMessage = styled.p``;

const H = styled.h3``;

const Banks = ({className, logic}) => {
    return (
        <Cont className={className}>
            <H>은행</H>
            {logic.banks.length === 0 && <NoBanksMessage>은행이 없습니다.</NoBanksMessage>}
            <BanksCont>
                {logic.banks.map((bank) => {
                    return <TheBank 
                        key={bank.id}
                        id={bank.id}
                        name={bank.name}
                        dailyInterestRate={bank.dailyInterestRate}
                        budget={bank.budget}
                    />;
                })}
            </BanksCont>
        </Cont>
    );
};

export default Banks;
