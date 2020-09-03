import React, {useRef, useState} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';

import RootNavigator from './routes/_rootNavigator';

const Routes: React.FC = () => {
  const [routeName, setRouteName] = useState<string | undefined>('');
  const navigationRef = useRef<NavigationContainerRef>(null);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        setRouteName(navigationRef.current?.getCurrentRoute()?.name)
      }
      onStateChange={() => {
        const previousRouteName = routeName;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }

        setRouteName(currentRouteName);
      }}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Routes;
