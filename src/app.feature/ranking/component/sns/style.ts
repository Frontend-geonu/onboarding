import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgb(156, 203, 253);
  height: 108px;
  padding: 8px 16px;

  display: flex;
  justify-content: space-between;
`;

export const Writing = styled.div``;

export const Painting = styled.img`
  width: 128px;
`;

export const Notice = styled.div`
  font-weight: 500;
  margin: 0;

  font-size: 1rem;
  font-weight: 600;

  margin: 8px 0px;
`;

export const GoSns = styled.button`
  background: black;
  color: white;

  padding: 4px 16px;

  border: none;
  border-radius: 100px;

  font-size: 1rem;
  font-weight: 600;

  margin-bottom: 8px;
`;

export const Additional = styled.div`
  font-size: 0.5rem;
  color: gray;
`;
