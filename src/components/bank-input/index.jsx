import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
`;

const SelectedBankName = styled.p``;

const ResetButton = styled.button``;

const Banks = styled.div`
    padding: 4px;
    border: 1px solid blue;
    overflow-y: scroll;
    height: 200px;
`;

const Bank = styled.div`
    padding: 4px;
    border: 1px solid pink;

    margin-top: 6px;
    
    &:first-of-type {
        margin-top: 0px;
    }
`;
const P = styled.p`
    
`
const BankInput = ({
    className,
    value,
    setValue,
    banking,
}) => {
    const bankNameById = (bankId) => {
        const bank = banking.banks.find((currentBank) => currentBank.id === bankId);
        return bank.name;
    };

    return (
        <Cont className={className}>
            <SelectedBankName>{value == null ? '-' : bankNameById(value)}</SelectedBankName>
            <ResetButton
                onClick={(event) => {
                    event.stopPropagation();
                    setValue(null);
                }}
            >
                선택해제
            </ResetButton>
            {banking.banks.length === 0 && <p>은행이 없습니다</p>}
            {banking.banks.length !== 0 && 
                <Banks>
                    <P>은행 목록</P>
                    {banking.banks.map((bank) => {
                        return (
                            <Bank 
                                key={bank.id}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setValue(bank.id);
                                }}
                            >
                                {bank.name}
                            </Bank>
                        );
                    })}
                </Banks>
            }
        </Cont>
    );
};

export default BankInput;
