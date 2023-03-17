import { useEffect, useState } from 'react';
import * as S from './style';

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
    <S.Wrapper isRender={isRender} isSlideLeft={isSlideLeft}>
      {children}
    </S.Wrapper>
  );
};
export default SlideAnimation;
