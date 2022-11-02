import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  border: 1px solid pink;
  padding: 8px;
  visibility: visible;
`;

const Field = styled.span`
  display: block;
`;


const Name = Field;

const Balance = Field;

const BankAccount = ({className , logic}) => {
  return(
     <Cont className={className}>
      {logic.bank}
     </Cont>
     );
};

export default BankAccount;
