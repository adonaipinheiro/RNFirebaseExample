import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import api from '../../../service/api';

// Interface
import {NestedProps} from '../../../utils/navigationProps.types';

// Styles
import {Container, Title, Input, ButtonArea, ButtonText} from './styles';

const Login: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const navigation = useNavigation<NestedProps>();

  const handlePressLogin = async () => {
    analytics().logLogin({method: 'inApp'});
    analytics().logEvent('handlePressLoginPressed');
    analytics().logEvent('changeRoute', {screen: 'Dashboard'});
    const {digitalHash} = await api.loginWithDigital('123aSDGUY1ASUGDU123123');
    console.log(digitalHash);
    navigation.replace('PrivateNavigator', {screen: 'Dashboard'});
  };

  const onFocus = (type: string) => {
    analytics().logEvent(type);
  };

  return (
    <Container>
      <Title>AP</Title>
      <Input
        value={user}
        onFocus={() => onFocus('InputUserFocus')}
        onChangeText={(text) => setUser(text)}
        placeholder="Usuário"
        keyboardType="email-address"
      />
      <Input
        value={pass}
        onFocus={() => onFocus('InputPassFocus')}
        onChangeText={(text) => setPass(text)}
        placeholder="Senha"
        secureTextEntry
      />
      <ButtonArea onPress={handlePressLogin}>
        <ButtonText>Entrar</ButtonText>
      </ButtonArea>
    </Container>
  );
};

export default Login;
