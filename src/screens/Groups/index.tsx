import { Header } from '@components/Header';
import { Container } from './styles';
import { TitleWithSubtitle } from '@components/TitleWithSubtitle';
import { GroupCard } from '@components/GroupCard';

export function Groups() {

  return (
    <Container>
      <Header />
      <TitleWithSubtitle 
        title='Turmas'
        subtitle='jogue com sua turma'
      />
      <GroupCard title='Time 1'/>
    </Container>
  );
}
