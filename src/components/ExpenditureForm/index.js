import React, { useState } from 'react';
import { View, Picker } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input } from 'react-native-elements';

const typeList = [ { id: 1, name: 'Daily Travel' }, { id: 2, name: 'Foods' }, { id: 3, name: 'Others' } ];

const ExpenditureForm = () => {
  const [ selected, setSelected ] = useState('');
  const [ price, setPrice ] = useState('');
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <Picker selectedValue={selected} mode="dialog">
        {typeList.map((type) => <Picker.Item key={type.id} label={type.name} value={type.name} />)}
      </Picker>

      <Input label="Description" value={description} onChangeText={(value) => setDescription(value)} />

      <Input label="Price" value={price} onChangeText={(value) => setPrice(value)} />

      <DateTimePicker value={date} mode="date" onChange={(e, v) => setDate(v)} />
    </View>
  );
};

export default ExpenditureForm;
