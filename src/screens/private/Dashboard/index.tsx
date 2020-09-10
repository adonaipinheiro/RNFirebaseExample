import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

// Interface
import {NestedProps} from '../../../utils/navigationProps.types';

// Styles
import {
  Container,
  Title,
  Separator,
  ButtonArea,
  ButtonText,
  ButtonsArea,
  ButtonTestArea,
  ButtonTestText,
} from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation<NestedProps>();

  const handlePressLogoff = () => {
    analytics().logEvent('Logout');
    analytics().logEvent('handlePressLogoffPressed');
    analytics().logEvent('changeRoute', {screen: 'Login'});
    navigation.replace('PublicNavigator', {screen: 'Login'});
  };

  const handlePressButton = (name: string, data: Object) => {
    analytics().logEvent(name, data);
  };

  useEffect(() => {
    crashlytics().log('Dashboard mounted.');
  }, []);

  return (
    <Container accessible={true} accessibilityLabel="Tela de Dashboard">
      <Title accessibilityLabel="Bem-vindo">Bem-vindo</Title>
      <Separator />
      <ButtonArea
        onPress={handlePressLogoff}
        accessibilityLabel="Botão para Sair">
        <ButtonText>Sair</ButtonText>
      </ButtonArea>
      <ButtonsArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste1', {ex: 'test 1'});
          }}
          accessibilityLabel="Botão Test 1">
          <ButtonTestText>Test 1</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste2', {ex: 'test 2'});
          }}
          accessibilityLabel="Botão Test 2">
          <ButtonTestText>Test 2</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste3', {ex: 'test 3'});
          }}
          accessibilityLabel="Botão Test 3">
          <ButtonTestText>Test 3</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste4', {ex: 'test 4'});
          }}
          accessibilityLabel="Botão Test 4">
          <ButtonTestText>Test 4</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste5', {ex: 'test 5'});
          }}
          accessibilityLabel="Botão Test 5">
          <ButtonTestText>Test 5</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste6', {ex: 'test 6'});
          }}
          accessibilityLabel="Botão Test 6">
          <ButtonTestText>Test 6</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste7', {ex: 'test 7'});
          }}
          accessibilityLabel="Botão Test 7">
          <ButtonTestText>Test 7</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste8', {ex: 'test 8'});
          }}
          accessibilityLabel="Botão Test 8">
          <ButtonTestText>Test 8</ButtonTestText>
        </ButtonTestArea>
      </ButtonsArea>
    </Container>
  );
};

export default Dashboard;
