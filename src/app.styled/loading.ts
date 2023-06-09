import { keyframes } from 'styled-components';

export const rotate4 = keyframes` 
    100% {
    transform: rotate(360deg);
  }
`;

export const dash4 = keyframes`
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
