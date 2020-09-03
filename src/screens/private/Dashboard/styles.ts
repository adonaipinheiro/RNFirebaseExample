import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: ${Dimensions.get('screen').width + 'px'};
`;

export const Title = styled.Text`
  text-align: left;
  font-size: 48px;
  max-width: 150px;
  color: #c471ed;
  font-weight: bold;
  margin-left: 10px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: #ddd;
  margin: 10px 0;
`;

export const ButtonArea = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  right: 10px;
`;

export const ButtonText = styled.Text`
  color: #12c2e9;
  font-weight: bold;
`;

export const ButtonsArea = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonTestArea = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  margin: 10px 0;
  background: #ddd;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const ButtonTestText = styled.Text``;
