import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const CreateUser = ({
    className,
    name,
    age,
    country,
    initialBudget,
    setName,
    setAge,
    setCountry,
    setInitialBudget,
    onSubmit,
}) => {
    return (
        <Cont className={className}>
            <input 
                placeholder={'이름'}
                value={name} 
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <input 
                placeholder={'나이'}
                type='number'
                value={age} 
                onChange={(event) => {
                    setAge(event.target.value);
                }}
            />
            <input 
                placeholder={'소속국'}
                value={country} 
                onChange={(event) => {
                    setCountry(event.target.value);
                }}
            />
            <input 
                placeholder={'초기 자산'}
                type='number'
                value={initialBudget} 
                onChange={(event) => {
                    setInitialBudget(event.target.value);
                }}
            />
            <input
                type='button'
                value='생성'
                onClick={(event) => {
                    event.stopPropagation();
                    onSubmit != null && onSubmit();
                }}
            />
        </Cont>
    );
};

export default CreateUser;
