import { FaSadTear as SadFace } from 'react-icons/fa';
import Button from '@/app.components/button/CommonButton';
import Link from 'next/link';
import useLoading from '@/app.hooks/loadingHook';
import ResetRecommandList from '@/app.feature/ranking/component/ResetRecommandList';
import Sns from '@/app.feature/ranking/Sns';
import Loading from '@/app.components/loading/CommonLoading';
import styled from 'styled-components';

const RecommandFriend: React.FC = () => {
  const [isLoading, handleReset] = useLoading();
  return (
    <StyledWrapper>
      {isLoading ? (
        <>
          <ResetRecommandList isLoading={isLoading} handleReset={handleReset} />
          <Loading />
        </>
      ) : (
        <>
          <Sns />
          <ResetRecommandList isLoading={isLoading} handleReset={handleReset} />
          <div className="bottom">
            <div className="nothing">
              <SadFace size={40} />
              <div>
                추천할 친구가 없어요.
                <br />
                새로고침하여 새로운 추천 친구 목록을 불러오세요!
              </div>
            </div>
            <Link href="/friend">
              <Button content="더 많은 친구 보러가기" />
            </Link>
          </div>
        </>
      )}
    </StyledWrapper>
  );
};

export default RecommandFriend;

const StyledWrapper = styled.div`
  .bottom {
    padding: 16px;
    text-align: center;
  }

  .nothing {
    margin: 24px 0px;
  }
`;
