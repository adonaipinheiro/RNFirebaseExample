import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#12c2e9', '#c471ed'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 0},
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
`;

export const Input = styled.TextInput`
  padding: 5px 10px;
  margin: 5px;
  border-radius: 4px;
  width: 200px;
  height: 40px;
  background: #f2f2f2;
`;

export const ButtonArea = styled.TouchableOpacity`
  width: 200px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background: #00000070;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`;
