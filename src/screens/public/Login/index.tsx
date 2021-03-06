import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';
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

  useEffect(() => {
    crashlytics().log('Login mounted.');
  }, []);

  return (
    <Container accessible={true} accessibilityLabel="Tela Login">
      <Title accessibilityLabel="Adonai Pinheiro">AP</Title>
      <Input
        value={user}
        onFocus={() => onFocus('InputUserFocus')}
        onChangeText={(text) => setUser(text)}
        placeholder="Usuário"
        keyboardType="email-address"
        accessibilityLabel="Campo de texto para o usuário"
      />
      <Input
        value={pass}
        onFocus={() => onFocus('InputPassFocus')}
        onChangeText={(text) => setPass(text)}
        placeholder="Senha"
        secureTextEntry
        accessibilityLabel="Campo de texto para a senha"
      />
      <ButtonArea
        onPress={handlePressLogin}
        accessibilityLabel="Pressione o botão para logar">
        <ButtonText>Entrar</ButtonText>
      </ButtonArea>
    </Container>
  );
};

export default Login;
