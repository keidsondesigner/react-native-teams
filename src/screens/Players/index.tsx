import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { TitleWithSubtitle } from '@components/TitleWithSubtitle';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<string[]>(['Keidson', 'Karol', 'Arthur']);

  return (
    <Container>
      <Header showBackButton />

      <TitleWithSubtitle 
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />

      <Form>
        <Input 
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />
        <ButtonIcon icon='add'/>
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item} 
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal={true}
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

    </Container>
  );
}