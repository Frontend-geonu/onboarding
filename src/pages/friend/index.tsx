import ResetRecommandList from '@/app.components/resetRecommandList';
import Sns from '@/app.components/sns';
import Search from '@/app.feature/friend/component/search';
import * as S from './style';
import { FaSadTear } from 'react-icons/fa';
import BigButton from '@/app.components/bigButton';
import { useState } from 'react';
import useLoading from '@/app.hooks/loadingHook';

const Friend: React.FC = () => {
  const [isLoading, handleReset] = useLoading();

  return (
    <S.Wrapper>
      <Search />
      <S.Main>
        <S.Notice>
          친구하고 싶은 사용자를 추천코드로 검색합니다. <br />
          이미 친구인 사용자를 검색하고
          <br /> 싶다면 아래의 버튼을 선택해주세요
          <S.ButtonContainer>
            <BigButton content="친구 검색하러 가기" />
          </S.ButtonContainer>
        </S.Notice>
        {isLoading ? (
          <div>
            <ResetRecommandList
              isLoading={isLoading}
              handleReset={handleReset}
            />
            loading ...
          </div>
        ) : (
          <>
            <Sns />
            <ResetRecommandList
              isLoading={isLoading}
              handleReset={handleReset}
            />
            <S.Notice>
              <FaSadTear size={40} />
              <div>
                추천할 친구가 없어요.
                <br />
                새로고침하여 새로운 추천 친구 목록을 불러오세요!
              </div>
            </S.Notice>
          </>
        )}
      </S.Main>
    </S.Wrapper>
  );
};
export default Friend;
