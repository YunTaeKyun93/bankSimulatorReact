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
const Age = Field;
const Country = Field;
const Budget = Field;

const User = ({className, id, name, age, country, budget}) => {
    return (
        <Cont className={className}>
            <Id>{id}</Id>
            <Name>{name}</Name>
            <Age>{age}</Age>
            <Country>{country}</Country>
            <Budget>{budget.toLocaleString('en-US')}</Budget>
        </Cont>
    );
};

export default User;
