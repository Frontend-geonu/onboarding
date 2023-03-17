import { keyframes } from 'styled-components';

export const slideLeft = keyframes`
    from {
      transform: translateX(100%);

    }
  
    to {
      transform: translateX(0%);
    }
`;

export const slideRight = keyframes`
  from {
      transform: translateX(-100%);

    }
  
    to {
      transform: translateX(0%);
    }
`;
