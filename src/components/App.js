/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'react-native-elements';
import ExpenditureHistory from './ExpenditureHistory';

import theme from './theme';
import PageTurner from '../assets/PageTurner';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <ThemeProvider theme={theme}>
          <ScrollView
            contentContainerStyle={styles.root}
            >
            <PageTurner />
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name="history" component={ExpenditureHistory} />
              </Tab.Navigator>
            </NavigationContainer>
          </ScrollView>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 0,
    flexDirection: 'column',
    backgroundColor: '#efefef'
  }
});

export default App;
