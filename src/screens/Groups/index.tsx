import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { groupsGetAll } from '@storage/group/groupGetAll';

import { Header } from '@components/Header';
import { Container } from './styles';
import { TitleWithSubtitle } from '@components/TitleWithSubtitle';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

export function Groups() {
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);

      const data = await groupsGetAll();

      setGroups(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Nao foi possivel carregar as turmas');
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />
      <TitleWithSubtitle 
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      {isLoading ? <Loading /> : (
        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item} 
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button 
        title='Criar nova turma'
        type='PRIMARY'
        onPress={handleNewGroup}
      />
    </Container>
  );
}
