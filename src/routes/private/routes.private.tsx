import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Dashboard from '../../screens/private/Dashboard';

// Type
import {StackParamListPrivate} from '../../utils/route.types';

const Stack = createStackNavigator<StackParamListPrivate>();

function PrivateNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default PrivateNavigator;
