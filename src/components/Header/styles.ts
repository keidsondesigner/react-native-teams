import styled, { DefaultTheme } from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
  
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

// Trabalhando um component que não é padrão do React Native
// passamos por "()" styled(CaretLeft)
export const BackIcon = styled(CaretLeft).attrs(({ theme }: { theme: DefaultTheme }) => ({
  color: theme.COLORS.WHITE,
  size: 32
}))``;