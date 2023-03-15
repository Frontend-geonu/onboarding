import Sns from '@/app.components/sns';
import Search from '@/app.feature/friend/component/search';
import * as S from './style';

const Friend: React.FC = () => {
  return (
    <S.Wrapper>
      <Search />
      <div>친구하고 싶은 사용자를 추천코드로 검색합니다. ~~~</div>
      <Sns />
    </S.Wrapper>
  );
};
export default Friend;
