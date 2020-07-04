import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import cardStyles from './styles';

const TimelyExpenseCard = ({ timePeriodType, timePeriodValue, color }) => {
  return (
    <Card containerStyle={{ ...cardStyles.root, backgroundColor: color}}>
      <View style={cardStyles.contentwrapper}>
        <Text h4>{timePeriodType}</Text>
        <Text h3 style={cardStyles.bottomText}>
          Spent: {timePeriodValue}
        </Text>
      </View>
    </Card>
  );
};

export default TimelyExpenseCard;
