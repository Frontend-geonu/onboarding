import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #371804;
  border-radius: 16px;

  padding: 24px 16px;

  color: white;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  font-size: 0.75rem;
`;

export const Icon = styled.img`
  border-radius: 100px;
  width: 48px;
`;

export const EtcIcon = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: orange;
  border-radius: 100px;
`;

export const RecommandCodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #251b02;
  padding: 16px;
  border-radius: 8px;
`;

export const RecommandCodeTitle = styled.div``;
export const RecommandCode = styled.div`
  font-size: 28px;
  font-weight: 500;
`;
export const RecommandCodeCopy = styled.div`
  cursor: pointer;
  text-decoration: underline;
  color: yellow;

  font-weight: 600;
`;

export const Bottom = styled.footer`
  padding: 16px;

  font-size: 0.75rem;
`;
