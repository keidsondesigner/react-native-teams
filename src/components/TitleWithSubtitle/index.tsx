import { Conatiner, Title, Subtitle} from './styles'

type Props = {
  title: string;
  subtitle: string;
}

export function TitleWithSubtitle({ title, subtitle }: Props ){
  return(
    <Conatiner>
      <Title>
        { title }
      </Title>
      <Subtitle>
        { subtitle }
      </Subtitle>
    </Conatiner>
  );
}