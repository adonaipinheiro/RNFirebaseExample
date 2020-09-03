import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
    navigation.replace('PublicNavigator', {screen: 'Login'});
  };

  const handlePressButton = (name: string, data: Object) => {
    console.log(name, data);
  };

  return (
    <Container>
      <Title>Bem-vindo</Title>
      <Separator />
      <ButtonArea onPress={handlePressLogoff}>
        <ButtonText>Sair</ButtonText>
      </ButtonArea>
      <ButtonsArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste 1', {ex: 'test 1'});
          }}>
          <ButtonTestText>Test 1</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste 2', {ex: 'test 2'});
          }}>
          <ButtonTestText>Test 2</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste 3', {ex: 'test 3'});
          }}>
          <ButtonTestText>Test 3</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste 4', {ex: 'test 4'});
          }}>
          <ButtonTestText>Test 4</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste 5', {ex: 'test 5'});
          }}>
          <ButtonTestText>Test 5</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste 6', {ex: 'test 6'});
          }}>
          <ButtonTestText>Test 6</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste 7', {ex: 'test 7'});
          }}>
          <ButtonTestText>Test 7</ButtonTestText>
        </ButtonTestArea>
        <ButtonTestArea
          onPress={() => {
            handlePressButton('teste 8', {ex: 'test 8'});
          }}>
          <ButtonTestText>Test 8</ButtonTestText>
        </ButtonTestArea>
      </ButtonsArea>
    </Container>
  );
};

export default Dashboard;
