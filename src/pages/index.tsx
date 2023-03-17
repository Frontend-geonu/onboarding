import Head from 'next/head';
import { useState } from 'react';
import Invite from '@/app.feature/invite/screen';
import Ranking from '@/app.feature/ranking/screen';
import Request from '@/app.feature/request/screen';
import TabBar from '@/app.components/tabBar';
import SlideAnimation from '@/app.components/slideAnimation';

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

const Home: React.FC = () => {
  const [checkedOption, setCheckedOption] = useState(options[0].id);
  const [isSlideLeft, setIsSlideLeft] = useState(false);

  const handleChangeCheckedOption = (
    checkedOption: number,
    newValue: number
  ) => {
    if (checkedOption < newValue) {
      setIsSlideLeft(false);
    } else {
      setIsSlideLeft(true);
    }
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

        <SlideAnimation isSlideLeft={isSlideLeft} isView={checkedOption === 0}>
          <Ranking />
        </SlideAnimation>

        <SlideAnimation isSlideLeft={isSlideLeft} isView={checkedOption === 1}>
          <Invite />
        </SlideAnimation>

        <SlideAnimation isSlideLeft={isSlideLeft} isView={checkedOption === 2}>
          <Request />
        </SlideAnimation>
      </main>
    </>
  );
};

export default Home;
