import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Routes
import PublicNavigator from './public/routes.public';
import PrivateNavigator from './private/routes.private';

// Types
import {RootParamList} from '../utils/route.types';

const Stack = createStackNavigator<RootParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="PublicNavigator">
      <Stack.Screen name="PublicNavigator" component={PublicNavigator} />
      <Stack.Screen name="PrivateNavigator" component={PrivateNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
