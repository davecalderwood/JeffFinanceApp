import React, {useState} from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';
export const AddExpenseForm = () => {
  const [text, setText] = React.useState('');

  const [expense, setExpense] = useState('US Dollar');
  return (
    <View>
      <View>
        <TextInput 
          mode='outlined'
          label="Cost"
          onChangeText={text => setText(text)}
          value={text}
          keyboardType='numeric'
          placeholder="Cost"
          right={<TextInput.Icon name="currency-usd" />} />

        <Picker
          style={{ height: 50, width: "100%" }}
          selectedValue={expense}
          onValueChange={currentExpense => setExpense(currentExpense)}>
          <Picker.Item label="Fast Food" value="1" />
          <Picker.Item label="Groceries" value="2" />
          <Picker.Item label="Gas" value="3" />
          <Picker.Item label="Miscellaneous" value="4" />
        </Picker>
      </View>
    </View>
  );
};