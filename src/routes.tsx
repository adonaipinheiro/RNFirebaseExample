import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './routes/_rootNavigator';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Routes;
