import { spin } from '@/app.styled/spin';
import { MdReplay } from 'react-icons/md';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  background: rgb(231, 231, 231);

  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div``;

export const Reset = styled(MdReplay)``;

export const RotateReset = styled(MdReplay)`
  animation: ${spin} 1s infinite;
`;
