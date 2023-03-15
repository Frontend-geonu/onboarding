import * as S from './style';
import { MdReplay } from 'react-icons/md';
import { FaSadTear } from 'react-icons/fa';
import BigButton from '@/app.components/bigButton';

const RecommandFriend: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Top>
        <S.Writing>지금 친구신청이 가능한 친구를 소개합니다</S.Writing>
        <MdReplay size={30} />
      </S.Top>
      <S.Bottom>
        <S.Nothing>
          <FaSadTear size={40} />
          <div>
            추천할 친구가 없어요.
            <br />
            새로고침하여 새로운 추천 친구 목록을 불러오세요!
          </div>
        </S.Nothing>
        <BigButton content="더 많은 친구 보러가기" />
      </S.Bottom>
    </S.Wrapper>
  );
};

export default RecommandFriend;
