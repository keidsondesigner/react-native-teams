import { Header } from '@components/Header';
import { Container } from './styles';
import { TitleWithSubtitle } from '@components/TitleWithSubtitle';

export function Groups() {

  return (
    <Container>
      <Header />
      <TitleWithSubtitle 
        title='Turmas'
        subtitle='jogue com sua turma'
      />
    </Container>
  );
}
