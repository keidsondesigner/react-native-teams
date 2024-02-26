import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { TitleWithSubtitle } from '@components/TitleWithSubtitle';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  function handleGoToPalyers() {
    navigation.navigate('players', { group: group });
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
          onChangeText={setGroup}
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