import styled from 'styled-components';

const User: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="left">
        <>1</>
        <div className="profile-wrapper">
          <img className="crown" src="/images/crown.png" alt="crown" />
          <img
            className="profile"
            src="/images/kakao-default-profile.png"
            alt="profile"
          />
        </div>
        <div className="info-wrapper">
          <span>나(test004)</span>
          <span className="tag">#Dd</span>
          <span className="bar"></span>
        </div>
      </div>
      <span className="right">0걸음</span>
    </StyledWrapper>
  );
};
export default User;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 16px;
  align-items: center;

  height: 64px;

  .left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .right {
    width: 30%;

    font-size: 0.75rem;
    color: gray;
  }

  .profile-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    .crown {
      position: absolute;
      width: 12px;
      transform: rotate(-45deg);

      top: -4px;
      left: -2px;
    }

    .profile {
      width: 40px;
      border-radius: 50%;

      border: 2px solid #efc93f;
    }
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;

    .tag {
      color: #888888;
      font-size: 0.75rem;
    }

    .bar {
      border-bottom: 2px solid #888888;
      width: 140%;
    }
  }
`;
