import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AppError } from '@utils/AppError';
import { groupCreate } from '@storage/group/groupCreate';

import { Header } from '@components/Header';
import { TitleWithSubtitle } from '@components/TitleWithSubtitle';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Container, Content, Icon } from './styles';
import { Alert } from 'react-native';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleGoToPalyers() {
    try {
      // Verifanco se o user digitou alguma coisa no input;
      if(group.trim().length === 0) {
        return Alert.alert('Nova Turma', 'informe o nome da turma');
      }
      // Cria uma turma no LocalStorage;
      await groupCreate(group);
      navigation.navigate('players', { group: group });
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Nova Turma', error.message);
      } else {
        Alert.alert('Nova Turma', 'Não foi possível criar uma nova turma');
        console.log(error);
      }
    }
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