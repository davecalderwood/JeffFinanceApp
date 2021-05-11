import React, { useContext } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { Button } from 'react-native-paper';

const Profile = styled.View`
`;

const AddExpenseButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.ui.success};
  width: 50%;
  margin: auto;
`;

export const BudgetScreen = ({ navigation }) => {
  return (
    <SafeArea>
        <Profile>
            <Text>Budget Screen</Text>

            <AddExpenseButton icon="plus" mode="contained" onPress={() => navigation.navigate("AddExpense", {})}>
              Add Expense
            </AddExpenseButton>
        </Profile>
    </SafeArea>
  );
};