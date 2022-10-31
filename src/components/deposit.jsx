import React from 'react';
import styled from 'styled-components';
import UserInput from './user-input';
import BankInput from './bank-input';

const Cont = styled.div``;

const Deposit = ({
    className,
    userId,
    bankId,
    amount,
    setUserId,
    setBankId,
    setAmount,
    onSubmit,
    banking,
}) => {
    return (
        <Cont className={className}>
            <UserInput value={userId} setValue={setUserId} banking={banking}/>
            <BankInput value={bankId} setValue={setBankId} banking={banking}/>
            <input
                type='number'
                placeholder='입금액'
                value={amount}
                onChange={(event) => {
                    setAmount(event.target.value);
                }}
            />
            <button
                onClick={(event) => {
                    event.stopPropagation();
                    onSubmit != null && onSubmit();
                }}
            >
                입금
            </button>
        </Cont>
    );
};

export default Deposit;
