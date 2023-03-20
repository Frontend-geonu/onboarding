import { HiSearch as Magnifier } from 'react-icons/hi';
import styled from 'styled-components';
const Search: React.FC = () => {
  return (
    <StyledWrapper>
      <input
        className="code-input"
        type="text"
        placeholder="추천코드로 친구를 찾아보세요"
      />
      <button className="search-button" type="submit">
        <Magnifier color="white" size={30} />
      </button>
    </StyledWrapper>
  );
};
export default Search;

const StyledWrapper = styled.div`
  display: flex;
  height: 48px;

  .code-input {
    width: 100%;
    font-size: 1rem;
    padding: 16px;
    border: none;
  }

  .search-button {
    background: var(--dark-brown);
    border: none;
    width: 56px;
  }
`;
