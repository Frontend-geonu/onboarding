import TabBar from '@/app.components/tabBar';
import { slide } from '@/app.styled/slide';
import { useState } from 'react';
import styled from 'styled-components';

const Style = styled.div`
  animation: ${slide} 1s ease forwards;
`;

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

const Tap = () => {
  const [value, setValue] = useState(true);

  return (
    <>
      {value && <Style>a</Style>}
      <button onClick={() => setValue((prev) => !prev)}>11</button>
    </>
  );
};
export default Tap;
