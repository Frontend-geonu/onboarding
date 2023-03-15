import * as S from './style';

interface IFProps {
  content: string;
  color?: string;
}

const BigButton: React.FC<IFProps> = ({
  content,
  color = '#8E8E8E',
}: IFProps) => {
  return <S.Button color={color}>{content}</S.Button>;
};
export default BigButton;
