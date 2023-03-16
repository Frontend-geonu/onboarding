import styled, { keyframes } from 'styled-components';

const rotate4 = keyframes` 
    100% {
    transform: rotate(360deg);
  }
`;

const dash4 = keyframes`
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
  
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
  
    100% {
      stroke-dashoffset: -125px;
    }
`;

export const Wrapper = styled.div`
  text-align: center;

  // TODO : 로딩컴포넌트 세로 위치 잡기
`;
export const CircleContainer = styled.svg`
  width: 3.25em;
  transform-origin: center;
  animation: ${rotate4} 2s linear infinite;
`;
export const Circle = styled.circle`
  fill: none;
  stroke: hsl(214, 97%, 59%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: ${dash4} 1.5s ease-in-out infinite;
`;
