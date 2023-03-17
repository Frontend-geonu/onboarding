import styled from 'styled-components';
import { MdReplay as Reset } from 'react-icons/md';
import { spin } from '@/app.styled/spin';

interface IFProps {
  isLoading: boolean;
  handleReset: () => void;
}

const ResetRecommandList: React.FC<IFProps> = ({
  isLoading,
  handleReset,
}: IFProps) => {
  return (
    <StyledWrapper>
      <span>지금 친구신청이 가능한 친구를 소개합니다</span>
      {isLoading ? (
        <Reset className="rotate" onClick={handleReset} size={30} />
      ) : (
        <Reset onClick={handleReset} size={30} />
      )}
    </StyledWrapper>
  );
};
export default ResetRecommandList;

export const StyledWrapper = styled.div`
  background: rgb(231, 231, 231);

  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .rotate {
    animation: ${spin} 1s infinite;
  }
`;
