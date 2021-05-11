import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { BudgetScreen } from '../../features/budget/screens/budget.screen';
import { AddExpenseScreen } from '../../features/budget/screens/add-expense.screen';

const BudgetStack = createStackNavigator();

export const BudgetNavigator = () => {
    return (
        <BudgetStack.Navigator
            headerMode="none"
            screenOptions={{...TransitionPresets.ModalPresentationIOS
            }}
        >
            <BudgetStack.Screen
                name="Budget"
                component={BudgetScreen}
            />
            <BudgetStack.Screen
                name="AddExpense"
                component={AddExpenseScreen}
            />

        </BudgetStack.Navigator>
    );
}