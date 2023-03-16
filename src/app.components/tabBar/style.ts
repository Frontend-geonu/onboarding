import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 48px;
  display: flex;
`;

export const Selected = styled.span<{ num: number }>`
  position: absolute;

  border-bottom: 4px solid #594d4d;

  top: 45px;
  width: calc(100vw / 3);
  transition: transform 0.2s ease-in-out;
  transform: translateX(calc(100vw / 3 * ${(props) => props.num}));
`;

export const Tab = styled.label`
  width: 100%;
  padding: 8px;

  text-align: center;

  border-bottom: 2px solid #d4d4d4;
`;

export const RadioInput = styled.input`
  display: none;
`;
