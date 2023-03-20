import { FaSadTear as SadFace } from 'react-icons/fa';
import styled from 'styled-components';

const Request: React.FC = () => {
  return (
    <StyledWrapper>
      <SadFace size={40} />
      <div>
        친구요쳥이 없어요.
        <br />
        추천된 친구목록에서 친구신청을 해보세요.
      </div>
    </StyledWrapper>
  );
};

export default Request;

const StyledWrapper = styled.div`
  text-align: center;
  margin: 36px 0px;
`;
