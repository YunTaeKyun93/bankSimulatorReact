import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    border: 1px solid pink;
    padding: 8px;
`;

const Field = styled.span`
    display: block;
`;

const Id = Field;
const Name = Field;
const DailyInterestRate = Field;
const Budget = Field;

const User = ({className, id, name, dailyInterestRate, budget}) => {
    return (
        <Cont className={className}>
            <Id>{id}</Id>
            <Name>{name}</Name>
            <DailyInterestRate>{dailyInterestRate}</DailyInterestRate>
            <Budget>{budget.toLocaleString('en-US')}</Budget>
        </Cont>
    );
};

export default User;
