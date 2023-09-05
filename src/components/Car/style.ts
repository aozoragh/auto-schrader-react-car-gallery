import styled from "styled-components";

export const CarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 427px;
  height: 538px;
  background-color: #fafafa;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
`;

export const ImageArea = styled.div`
  width: 100%;
  height: 266px;
  background: url("/assets/images/car.png");
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  & > svg {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 11px;
  padding: 27px;
`;

export const NameAndPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    color: #212121;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const EditionAndMTL = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const MTL = styled.div`
  width: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 500px;
`;

export const ViewCarButton = styled.div`
  width: 100%;
  height: 50px;
`;
