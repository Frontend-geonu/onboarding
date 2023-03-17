import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 16px;
  align-items: center;

  height: 64px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Right = styled.div`
  width: 30%;

  font-size: 0.75rem;
  color: gray;
`;

export const Num = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`;

export const ProfileContainer = styled.div`
  position: relative;
`;

export const Crown = styled.img`
  position: absolute;
  width: 12px;
  transform: rotate(-45deg);

  top: -4px;
  left: -2px;
`;

export const Profile = styled.img`
  width: 40px;
  border-radius: 50%;

  border: 2px solid #efc93f;
`;

export const Id = styled.div``;
export const Tag = styled.div`
  color: #888888;
  font-size: 0.75rem;
`;
export const Bar = styled.div`
  border-bottom: 2px solid #888888;
  width: 140%;
`;

export const UserInfo = styled.div``;

export const WalkNum = styled.div``;
