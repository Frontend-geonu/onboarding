import { handleCopyClipboard } from '@/app.modules/util/clipboard';
import { useState } from 'react';
import styled from 'styled-components';

const Invite: React.FC = () => {
  // TODO : 추후 추천코드 생성방식에 따라 변경 필요
  const [recommandCode, setRecommandCode] = useState('KRAGUC8');

  return (
    <StyledWrapper>
      <div className="top">
        <img
          src="/images/img-addfriend-text.png"
          alt="친구초대하고 500캐시 받자!"
        />
      </div>
      <div className="middle">
        <div className="social">
          <span className="icon-wrapper">
            <img
              className="icon"
              src="/images/ic-kakaotalk.png"
              alt="카카오톡 바로가기"
            />
            카카오톡
          </span>
          <span className="icon-wrapper">
            <img
              className="icon"
              src="/images/ic-band.png"
              alt="밴드 바로가기"
            />
            밴드
          </span>
          <span className="icon-wrapper">
            <img
              className="icon"
              src="/images/ic-facebook.png"
              alt="페이스북 바로가기"
            />
            페이스북
          </span>
          <span className="icon-wrapper">
            <div className="etc-icon">
              <img src="/images/ic-chain.png" alt="기타 바로가기" />
            </div>
            기타
          </span>
        </div>
        <div className="recommand-code-wrapper">
          <span>내 추천코드</span>
          <p className="recommand-code">{recommandCode}</p>
          <button
            className="recommand-code-copy"
            onClick={() => handleCopyClipboard(recommandCode)}
          >
            코드 복사하기
          </button>
        </div>
        <img src="/images/img-addfriend-illust.png" alt="너도 나도 500캐시" />
      </div>
      <footer className="bottom">
        <h3>이용 안내 사항</h3>
        <ol>
          <li>친구에게 캐시워크 초대 링크를 공유합니다.</li>
          <li>
            공유한 링크를 통해 찬구가 신규 회원가입 시, 내 추천코드를
            입력합니다.
          </li>
          <li>
            <b style={{ color: 'red' }}>500캐시</b>가 적립됩니다.
          </li>
        </ol>
        <h3>추가 안내 사항</h3>
        <ol>
          <li>친구가 신규가입자 일 경우에만 캐시가 지급이 됩니다.</li>
          <li>
            캐시 적립은 <b>최대 20명</b>까지 가능합니다.
          </li>
          <li>
            20명을 초과하여 적립을 원하는 유저는{' '}
            <b>
              내 추천코드와 친구의 추천코드를 가입일 포함 3일 이내에
              cs@cashwalk.io
            </b>
            로 남겨주시면 안내해 드리겠습니다.
          </li>
          <li>
            부적절한 방법으로 캐시를 적립한 회원은 캐시 적립이 취소됩니다.
          </li>
        </ol>
        <p>※ 해당 이벤트는 사전 예고없이 조기 종료 및 취소될 수 있습니다.</p>
      </footer>
    </StyledWrapper>
  );
};
export default Invite;

const StyledWrapper = styled.div`
  .top {
    display: flex;
    justify-content: center;
    margin: 16px;
  }

  .middle {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: var(--orange-dark-brown);
    border-radius: 16px;

    padding: 24px 16px;

    color: white;
  }

  .social {
    display: flex;
    justify-content: space-evenly;
  }

  .icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    font-size: 0.75rem;
  }

  .etc-icon {
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: orange;

    border-radius: 8px;
  }

  .recommand-code-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--heavy-dark-brown);
    padding: 16px;
    border-radius: 8px;
  }

  .recommand-code {
    font-size: 28px;
    font-weight: 500;
  }

  .recommand-code-copy {
    background: none;
    border: none;

    cursor: pointer;
    text-decoration: underline;
    color: yellow;

    font-weight: 600;
  }

  .bottom {
    padding: 16px;

    font-size: 0.75rem;
  }
`;
