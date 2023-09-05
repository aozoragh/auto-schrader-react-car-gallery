import styled from "styled-components";

export const DisplayAllDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 1385px;
`;

export const SearchAndFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const SearchForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  border: 1px solid #a1a1a1;
  background-color: #fafafa;
  border-radius: 10px;
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Suche nach Marke, Modell oder Stichwort (z.B., Volkswgen Golf)",
})`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 18px;
  padding-left: 15px;
  width: 100%;
`;

export const SearchButton = styled.div`
  width: 220px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1185px) {
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
  }
`;

export const FilterCondition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 1185px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 8px;
  }
`;
