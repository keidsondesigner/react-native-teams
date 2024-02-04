import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

// Se PRIMARY cor GREEN_700 se NÃO cor RED_DARK; 
export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }: { theme: DefaultTheme } & Props) => (
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK
  )};

  border-radius: 6px;
  align-items: center;
  justify-content: center;
`; 

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
`;