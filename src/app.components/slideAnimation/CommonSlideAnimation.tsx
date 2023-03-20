import { slideLeft, slideRight } from '@/app.styled/slide';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IFProps {
  children: React.ReactNode;
  isSlideLeft: boolean;
  isView: boolean;
}

const SlideAnimation: React.FC<IFProps> = ({
  children,
  isSlideLeft,
  isView,
}: IFProps) => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    if (!isView) {
      setIsRender(false);
    } else {
      setIsRender(true);
    }
  }, [isView]);

  return (
    <StyledWrapper isRender={isRender} isSlideLeft={isSlideLeft}>
      {children}
    </StyledWrapper>
  );
};
export default SlideAnimation;

const StyledWrapper = styled.div<{ isRender: boolean; isSlideLeft: boolean }>`
  display: ${({ isRender }) => (isRender ? 'block' : 'none')};

  animation: ${({ isSlideLeft }) => (isSlideLeft ? slideLeft : slideRight)} 0.2s
    ease forwards;
`;
