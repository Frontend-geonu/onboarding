import { slideLeft, slideRight } from '@/app.styled/slide';
import styled from 'styled-components';

export const Wrapper = styled.div<{ isRender: boolean; isSlideLeft: boolean }>`
  display: ${(props) => (props.isRender ? 'block' : 'none')};

  animation: ${(props) => (props.isSlideLeft ? slideLeft : slideRight)} 0.2s
    ease forwards;
`;
