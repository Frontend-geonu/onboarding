import * as S from './style';
import { HiSearch } from 'react-icons/hi';
const Search: React.FC = () => {
  return (
    <S.Wrapper>
      <S.CodeInput type="text" placeholder="추천코드로 친구를 찾아보세요" />
      <S.SearchButton type="submit">
        <HiSearch color="white" size={30} />
      </S.SearchButton>
    </S.Wrapper>
  );
};
export default Search;
