import * as S from './style';
import { MdReplay } from 'react-icons/md';

const ResetRecommandList: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Content>지금 친구신청이 가능한 친구를 소개합니다</S.Content>
      <MdReplay size={30} />
    </S.Wrapper>
  );
};
export default ResetRecommandList;
