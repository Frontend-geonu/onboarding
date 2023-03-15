import styled from 'styled-components';

export const Button = styled.button<{ color: string }>`
  background: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 100px;
  font-size: 1.25rem;

  padding: 16px 28px;
`;
