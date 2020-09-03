import {StackNavigationProp} from '@react-navigation/stack';

import {
  StackParamListPrivate,
  StackParamListPublic,
  RootParamList,
} from './route.types';

export type ScreenNavigationPropPrivate = StackNavigationProp<
  StackParamListPrivate
>;

export type ScreenNavigationPropPublic = StackNavigationProp<
  StackParamListPublic
>;

export type NestedProps = StackNavigationProp<RootParamList>;
