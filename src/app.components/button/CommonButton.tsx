import styled from 'styled-components';

interface IFProps {
  content: string;
  color?: string;
}

const Button: React.FC<IFProps> = ({
  content,
  color = 'var(--light-gray)',
}: IFProps) => {
  return <StyledWrapper color={color}>{content}</StyledWrapper>;
};
export default Button;

export const StyledWrapper = styled.button<{ color: string }>`
  background: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 100px;
  font-size: 1.25rem;

  padding: 12px 28px;
`;
