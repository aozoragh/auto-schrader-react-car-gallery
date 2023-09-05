import styled from "styled-components";

export const CarGalleryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 632px) {
    padding: 0 5%;
    grid-template-columns: auto;
  }

  /* display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px; */

  & > input {
    width: 100%;
  }
`;
