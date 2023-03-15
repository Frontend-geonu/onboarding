import * as S from './style';

const Invite: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Top>
        <img src="/images/img-addfriend-text.png" alt="addfriend-text" />
      </S.Top>
      <S.Middle>
        <S.Social>
          <S.IconContainer>
            <S.Icon src="/images/ic-kakaotalk.png" alt="kakaotalk" />
            카카오톡
          </S.IconContainer>
          <S.IconContainer>
            <S.Icon src="/images/ic-band.png" alt="band" />
            밴드
          </S.IconContainer>
          <S.IconContainer>
            <S.Icon src="/images/ic-facebook.png" alt="facebook" />
            페이스북
          </S.IconContainer>
          <S.IconContainer>
            <S.Icon src="" alt="기타icon" />
            기타
          </S.IconContainer>
        </S.Social>
        <S.RecommandCodeContainer>
          <S.RecommandCodeTitle>내 추천코드</S.RecommandCodeTitle>
          <S.RecommandCode>KRAGUC8</S.RecommandCode>
          <S.RecommandCodeCopy>코드 복사하기</S.RecommandCodeCopy>
        </S.RecommandCodeContainer>
        <img src="/images/img-addfriend-illust.png" alt="addfriend-illust" />
      </S.Middle>
      <S.Bottom>이용 안내사항</S.Bottom>
    </S.Wrapper>
  );
};
export default Invite;
