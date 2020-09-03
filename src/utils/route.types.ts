export type StackParamListPrivate = {
  Dashboard: undefined;
};

export type StackParamListPublic = {
  Login: undefined;
};

export type RootParamList = {
  PublicNavigator: {screen: 'Login'};
  PrivateNavigator: {screen: 'Dashboard'};
};
