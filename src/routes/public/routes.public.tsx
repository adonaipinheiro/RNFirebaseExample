import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Login from '../../screens/public/Login';

// Type
import {StackParamListPublic} from '../../utils/route.types';

const Stack = createStackNavigator<StackParamListPublic>();

function PublicNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default PublicNavigator;
