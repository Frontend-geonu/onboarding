import { handleCopyClipboard } from '@/app.modules/util/clipboard';
import { useState } from 'react';
import * as S from './style';

const Invite: React.FC = () => {
  // TODO : 추후 추천코드 생성방식에 따라 변경 필요
  const [recommandCode, setRecommandCode] = useState('KRAGUC8');

  return (
    <S.Wrapper>
      <S.Top>
        <img src="/images/img-addfriend-text.png" alt="addfriend-text" />
      </S.Top>
      <S.Middle>
        <S.Social>
          <S.IconContainer>
            <S.Icon src="/images/ic-kakaotalk.png" alt="kakaotalk" />
            카카오톡
          </S.IconContainer>
          <S.IconContainer>
            <S.Icon src="/images/ic-band.png" alt="band" />
            밴드
          </S.IconContainer>
          <S.IconContainer>
            <S.Icon src="/images/ic-facebook.png" alt="facebook" />
            페이스북
          </S.IconContainer>
          <S.IconContainer>
            <S.EtcIcon>
              <img
                style={{ width: '24px' }}
                src="/images/ic-chain.png"
                alt="기타"
              />
            </S.EtcIcon>
            기타
          </S.IconContainer>
        </S.Social>
        <S.RecommandCodeContainer>
          <S.RecommandCodeTitle>내 추천코드</S.RecommandCodeTitle>
          <S.RecommandCode>{recommandCode}</S.RecommandCode>
          <S.RecommandCodeCopy
            onClick={() => handleCopyClipboard(recommandCode)}
          >
            코드 복사하기
          </S.RecommandCodeCopy>
        </S.RecommandCodeContainer>
        <img src="/images/img-addfriend-illust.png" alt="addfriend-illust" />
      </S.Middle>
      <S.Bottom>
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
      </S.Bottom>
    </S.Wrapper>
  );
};
export default Invite;
