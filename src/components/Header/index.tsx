import { Container, Logo, BackButton, BackIcon } from './styles';

import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props ) {
  return (
    <Container>
      {
        showBackButton && // se for true, mostra backButton;
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  )
}