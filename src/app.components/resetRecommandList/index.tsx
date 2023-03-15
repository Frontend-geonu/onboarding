import * as S from './style';

interface IFProps {
  isLoading: boolean;
  handleReset: () => void;
}

const ResetRecommandList: React.FC<IFProps> = ({
  isLoading,
  handleReset,
}: IFProps) => {
  return (
    <S.Wrapper>
      <S.Content>지금 친구신청이 가능한 친구를 소개합니다</S.Content>
      {isLoading ? (
        <S.RotateReset onClick={handleReset} size={30} />
      ) : (
        <S.Reset onClick={handleReset} size={30} />
      )}
    </S.Wrapper>
  );
};
export default ResetRecommandList;
