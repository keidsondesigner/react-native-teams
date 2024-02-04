import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme, css } from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';

//usando em parenteses "()", para modificar as propriedades do component
export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;

  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

`;

export const Title = styled.Text`
${({ theme }: { theme: DefaultTheme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_200};
` };
`;

export const Icon = styled(UsersThree).attrs(({ theme }: { theme: DefaultTheme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill', // estilo do icone com borda ou sem;
}))`
  margin-right: 20px;
`;