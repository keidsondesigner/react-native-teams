import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { TitleWithSubtitle } from '@components/TitleWithSubtitle';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {
  const navigation = useNavigation();

  function handleGoToPalyers() {
    navigation.navigate('players', { group: 'Grupo Nome' });
  }

  return(
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <TitleWithSubtitle
          title='Nova turma'
          subtitle='crie a turma para adicionar pessoas'
        />
        <Input 
          placeholder='Nova da turma'
        />
        <Button
          title='Criar'
          style={{ marginTop: 20}}
          onPress={handleGoToPalyers}
        />
      </Content>
    </Container>
  );
}