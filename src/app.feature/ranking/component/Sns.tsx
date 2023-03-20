import styled from 'styled-components';

const Sns: React.FC = () => {
  return (
    <StyledWrapper>
      <div>
        <p className="notice">지금 SNS 추가 연동하면 500캐시!</p>

        <button className="go-sns">
          SNS 연동하러 가기 {'>'}
          <span className="emphasis">500</span>
        </button>
        <div className="additional">
          *하나의 SNS연동에 한하여 최초 1회만 캐시가 지급됩니다.
        </div>
      </div>
      <img src="/images/img-addfriend-sns.png" alt="SNS로 친구추가" />
    </StyledWrapper>
  );
};
export default Sns;

const StyledWrapper = styled.div`
  background-color: rgb(156, 203, 253);

  padding: 8px 16px;

  display: flex;
  justify-content: space-between;

  .notice {
    font-weight: 500;
    margin: 0;

    font-size: 1rem;
    font-weight: 600;

    margin: 8px 0px;
  }

  .emphasis {
    position: absolute;
    bottom: 16px;
    right: -8px;

    font-size: 0.5rem;
    font-weight: 500;

    background-color: red;
    border-radius: 8px;

    padding: 2px;
  }

  .go-sns {
    position: relative;

    background: black;
    color: white;

    padding: 4px 20px 4px 16px;

    border: none;
    border-radius: 100px;

    font-size: 1rem;
    font-weight: 600;

    margin-bottom: 8px;
  }

  .additional {
    font-size: 0.5rem;
    color: gray;
  }
`;
