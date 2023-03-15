import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import Invite from '@/app.feature/invite/screen';
import Ranking from '@/app.feature/ranking/screen';
import Request from '@/app.feature/request/screen';

const Home: React.FC = () => {
  const [value, setValue] = useState('ranking');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#FFFFFF' }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="랭킹" value="ranking" />
              <Tab label="친구초대" value="invite" />
              <Tab label="받은요청" value="request" />
            </Tabs>
          </Box>
        </Box>
        {value === 'ranking' && <Ranking />}
        {value === 'invite' && <Invite />}
        {value === 'request' && <Request />}
      </main>
    </>
  );
};

export default Home;
