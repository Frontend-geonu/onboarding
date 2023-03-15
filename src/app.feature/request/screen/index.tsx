import { FaSadTear } from 'react-icons/fa';
import * as S from './style';

const Request: React.FC = () => {
  return (
    <S.Wrapper>
      <FaSadTear size={40} />
      <div>
        친구요쳥이 없어요.
        <br />
        추천된 친구목록에서 친구신청을 해보세요.
      </div>
    </S.Wrapper>
  );
};
export default Request;
