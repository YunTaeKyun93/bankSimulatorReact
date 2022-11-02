import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  padding: 8px;
  background-color: royalblue;
`;

const Field = styled.span`
  display: block;
`;

const Id = Field;
const Name = Field;
const DailyInterestRate = Field;
const Budget = Field;

const Bank = ({ className, id, name, dailyInterestRate, budget,  }) => {
  return (
    <Cont className={className}>
      <Id>{id}</Id>
      <Name>{name}</Name>
      <DailyInterestRate>{dailyInterestRate}</DailyInterestRate>
      <Budget>{budget.toLocaleString("en-US")}</Budget>
    </Cont>
  );
};

export default Bank;
