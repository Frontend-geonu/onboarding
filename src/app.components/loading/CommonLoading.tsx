import { dash4, rotate4 } from '@/app.styled/loading';
import styled from 'styled-components';

const Loading: React.FC = () => {
  return (
    <StyledWrapper>
      <svg className="circle-wrapper" viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </StyledWrapper>
  );
};

export default Loading;

export const StyledWrapper = styled.div`
  text-align: center;

  // TODO : 로딩컴포넌트 세로 위치 잡기

  .circle-wrapper {
    width: 3.25em;
    transform-origin: center;
    animation: ${rotate4} 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: hsl(214, 97%, 59%);
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${dash4} 1.5s ease-in-out infinite;
  }
`;
