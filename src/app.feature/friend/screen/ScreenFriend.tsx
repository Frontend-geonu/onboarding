import ResetRecommandList from '@/app.feature/ranking/component/ResetRecommandList';
import Sns from '@/app.feature/ranking/Sns';
import Search from '@/app.feature/friend/component/search/Search';
import { FaSadTear } from 'react-icons/fa';
import Button from '@/app.components/button/CommonButton';
import useLoading from '@/app.hooks/loadingHook';

import styled from 'styled-components';
import Loading from '@/app.components/loading/CommonLoading';

const ScreenFriend: React.FC = () => {
  const [isLoading, handleReset] = useLoading();

  return (
    <StyledWrapper>
      <Search />
      <main>
        <div className="notice">
          친구하고 싶은 사용자를 추천코드로 검색합니다. <br />
          이미 친구인 사용자를 검색하고
          <br /> 싶다면 아래의 버튼을 선택해주세요
          <span className="button-wrapper">
            <Button content="친구 검색하러 가기" />
          </span>
        </div>
        {isLoading ? (
          <>
            <ResetRecommandList
              isLoading={isLoading}
              handleReset={handleReset}
            />
            <Loading />
          </>
        ) : (
          <>
            <Sns />
            <ResetRecommandList
              isLoading={isLoading}
              handleReset={handleReset}
            />
            <div className="notice">
              <FaSadTear size={40} />
              <div>
                추천할 친구가 없어요.
                <br />
                새로고침하여 새로운 추천 친구 목록을 불러오세요!
              </div>
            </div>
          </>
        )}
      </main>
    </StyledWrapper>
  );
};
export default ScreenFriend;

const StyledWrapper = styled.div`
  main {
    text-align: center;
    margin-top: 12px;
  }

  .button-wrapper {
    margin: 12px 0px;
  }

  .notice {
    padding: 36px 0px;
    background: white;

    font-size: 1.125rem;
    color: var(--heavy-gray);
  }
`;
