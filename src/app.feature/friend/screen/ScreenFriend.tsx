import ResetRecommandList from '@/app.feature/ranking/component/ResetRecommandList';
import Sns from '@/app.feature/ranking/Sns';
import Search from '@/app.feature/friend/component/search';
import { FaSadTear } from 'react-icons/fa';
import Button from '@/app.components/button/CommonButton';
import useLoading from '@/app.hooks/loadingHook';

import styled from 'styled-components';
import Loading from '@/app.components/loading/CommonLoading';

export const Wrapper = styled.div``;

export const Main = styled.div`
  text-align: center;
  margin-top: 12px;
`;

export const ButtonContainer = styled.div`
  margin: 12px 0px;
`;

export const Notice = styled.div`
  padding: 36px 0px;
  background: white;

  font-size: 1.125rem;
  color: #7c7c7c;
`;

export const LoadingContainer = styled.div`
  text-align: center;

  // TODO : 로딩컴포넌트의 세로 위치 잡기
`;

const ScreenFriend: React.FC = () => {
  const [isLoading, handleReset] = useLoading();

  return (
    <Wrapper>
      <Search />
      <Main>
        <Notice>
          친구하고 싶은 사용자를 추천코드로 검색합니다. <br />
          이미 친구인 사용자를 검색하고
          <br /> 싶다면 아래의 버튼을 선택해주세요
          <ButtonContainer>
            <Button content="친구 검색하러 가기" />
          </ButtonContainer>
        </Notice>
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
            <Notice>
              <FaSadTear size={40} />
              <div>
                추천할 친구가 없어요.
                <br />
                새로고침하여 새로운 추천 친구 목록을 불러오세요!
              </div>
            </Notice>
          </>
        )}
      </Main>
    </Wrapper>
  );
};
export default ScreenFriend;
