import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

// Interface
import {NestedProps} from '../../../utils/navigationProps.types';

// Styles
import {Container, Title, Input, ButtonArea, ButtonText} from './styles';

const Login: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const navigation = useNavigation<NestedProps>();

  const handlePressLogin = () => {
    navigation.replace('PrivateNavigator', {screen: 'Dashboard'});
  };

  return (
    <Container>
      <Title>AP</Title>
      <Input
        value={user}
        onChangeText={(text) => setUser(text)}
        placeholder="Usuário"
        keyboardType="email-address"
      />
      <Input
        value={pass}
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
