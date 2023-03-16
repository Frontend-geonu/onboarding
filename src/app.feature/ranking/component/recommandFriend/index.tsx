import * as S from './style';
import { FaSadTear } from 'react-icons/fa';
import BigButton from '@/app.components/bigButton';
import Link from 'next/link';
import useLoading from '@/app.hooks/loadingHook';
import ResetRecommandList from '@/app.components/resetRecommandList';
import Sns from '@/app.components/sns';
import Loading from '@/app.components/loading';

const RecommandFriend: React.FC = () => {
  const [isLoading, handleReset] = useLoading();
  return (
    <S.Wrapper>
      {isLoading ? (
        <>
          <ResetRecommandList isLoading={isLoading} handleReset={handleReset} />
          <Loading />
        </>
      ) : (
        <>
          <Sns />
          <ResetRecommandList isLoading={isLoading} handleReset={handleReset} />
          <S.Bottom>
            <S.Nothing>
              <FaSadTear size={40} />
              <div>
                추천할 친구가 없어요.
                <br />
                새로고침하여 새로운 추천 친구 목록을 불러오세요!
              </div>
            </S.Nothing>
            <Link href="/friend">
              <BigButton content="더 많은 친구 보러가기" />
            </Link>
          </S.Bottom>
        </>
      )}
    </S.Wrapper>
  );
};

export default RecommandFriend;
