import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Container } from './styles';
import { TitleWithSubtitle } from '@components/TitleWithSubtitle';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Time 1', 'Time 2', 'Time 3']);

  return (
    <Container>
      <Header />
      <TitleWithSubtitle 
        title='Turmas'
        subtitle='jogue com sua turma'
      />
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
      />
    </Container>
  );
}
