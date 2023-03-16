import Head from 'next/head';
import { useEffect, useState } from 'react';
import Invite from '@/app.feature/invite/screen';
import Ranking from '@/app.feature/ranking/screen';
import Request from '@/app.feature/request/screen';
import TabBar from '@/app.components/tabBar';
import styled from 'styled-components';
import { slide } from '@/app.styled/slide';

const options = [
  {
    id: 0,
    value: '랭킹',
  },
  {
    id: 1,
    value: '친구 초대',
  },
  {
    id: 2,
    value: '받은 요청',
  },
];

const SlideAnimation = styled.div`
  animation: ${slide} 0.2s ease forwards;
`;

const Home: React.FC = () => {
  const [checkedOption, setCheckedOption] = useState(options[0].id);

  const handleChangeCheckedOption = (newValue: number) => {
    setCheckedOption(newValue);
  };

  return (
    <>
      <Head>
        <title>onboarding</title>
        <meta name="description" content="clone-coding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TabBar
          options={options}
          checkedOption={checkedOption}
          handleChangeCheckedOption={handleChangeCheckedOption}
        />
        {checkedOption === 0 && (
          <SlideAnimation>
            <Ranking />
          </SlideAnimation>
        )}
        {checkedOption === 1 && (
          <SlideAnimation>
            <Invite />
          </SlideAnimation>
        )}
        {checkedOption === 2 && (
          <SlideAnimation>
            <Request />
          </SlideAnimation>
        )}
      </main>
    </>
  );
};

export default Home;
