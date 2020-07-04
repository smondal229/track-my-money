import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Card } from 'react-native-elements';

import styles from './styles';
import TimelyExpenseCard from './TimelyExpenseCard';
import ExpenditureChart from './Chart';

const expenseList = [
  { type: 'Today', expense: '22.00', color: '#eb6b34' },
  { type: 'This Week', expense: '122.00', color: '#1a95b8' },
  { type: 'This Month', expense: '622.00', color: '#238267' }
];

const Dashboard = () => {
  return (
    <View>
      <Text h3 h3Style={styles.heading}>
        Dashboard
      </Text>
      <Card containerStyle={styles.dashboardLegendCard}>
        <View style={{ position: 'relative', height: 150 }}>
          <Text h4>Total: 786.00</Text>
          <Text h6>Till Data: 05.06.2020</Text>
          <Text h4 style={styles.bottomText}>
            You are left with: 1270.00
          </Text>
        </View>
      </Card>
      <FlatList
        data={expenseList}
        horizontal={true}
        keyExtractor={(item) => item.type}
        renderItem={({ item: { type, expense, color } }) => (
          <TimelyExpenseCard timePeriodType={type} timePeriodValue={expense} color={color} />
        )}
      />
      <View style={styles.chartRoot}>
        <Text h4 style={styles.chartHeader}>
          Expenditure chart
        </Text>
        <ExpenditureChart />
      </View>
    </View>
  );
};

export default Dashboard;
