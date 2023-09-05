import styled from "styled-components";

export const DarkSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px;
  height: 50px;
  background-color: #fafafa;
  border: 1px solid #a1a1a1;
  border-radius: 10px;
  gap: 24px;
  @media screen and (max-width: 945px) {
    width: 32%;
  }
  @media screen and (max-width: 632px) {
    width: 48%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
