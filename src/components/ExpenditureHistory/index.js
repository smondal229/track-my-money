import React from 'react';
import { View, FlatList } from 'react-native';

import ExpenditureHistoryProps from '../../fixtures/ExpenditureHistory';
import CardView from './CardView';

const ExpenditureHistory = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={ExpenditureHistoryProps} renderItem={CardView} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default ExpenditureHistory;
