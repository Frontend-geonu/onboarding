import * as S from './style';

const Loading = () => {
  return (
    <S.Wrapper>
      <S.CircleContainer viewBox="25 25 50 50">
        <S.Circle r="20" cy="50" cx="50"></S.Circle>
      </S.CircleContainer>
    </S.Wrapper>
  );
};

export default Loading;
