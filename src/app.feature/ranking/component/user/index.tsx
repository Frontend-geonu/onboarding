import * as S from './style';

const User: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Left>
        <S.Num>1</S.Num>
        {/* TODO : 프로필에 왕관모양 추가하기 */}
        <S.Profile src="/images/kakao-default-profile.png" alt="profile" />
        <S.UserInfo>
          <S.Id>나(test004)</S.Id>
          <S.Tag>#Dd</S.Tag>
          <S.Bar></S.Bar>
        </S.UserInfo>
      </S.Left>
      <S.Right>0걸음</S.Right>
    </S.Wrapper>
  );
};
export default User;
