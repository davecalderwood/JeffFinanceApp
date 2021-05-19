import React, { useContext } from "react";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AddExpenseForm } from '../components/add-expense-form';

const ExpenseForm = styled.View`
  margin: auto;
  width: 90%;
`;

export const AddExpenseScreen = () => {

  return (
    <SafeArea>
      <ExpenseForm>
        <AddExpenseForm />
      </ExpenseForm>
    </SafeArea>
  );
};