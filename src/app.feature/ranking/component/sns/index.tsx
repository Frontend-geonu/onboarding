import * as S from './style';

const Sns = () => {
  return (
    <S.Wrapper>
      <S.Writing>
        <S.Notice>지금 SNS 추가 연동하면 500캐시!</S.Notice>
        <S.GoSns>SNS 연동하러 가기 {'>'}</S.GoSns>
        <S.Additional>
          *하나의 SNS연동에 한하여 최초 1회만 캐시가 지급됩니다.
        </S.Additional>
      </S.Writing>
      <S.Painting src="/images/img-addfriend-sns.png" alt="addfriend-sns" />
    </S.Wrapper>
  );
};
export default Sns;
