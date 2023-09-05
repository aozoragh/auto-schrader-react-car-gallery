import React, { FC, useState } from "react";
import Button from "../../components/Button";
import {
  Container,
  DisplayAllDiv,
  FilterCondition,
  FilterForm,
  SearchAndFilter,
  SearchButton,
  SearchForm,
  SearchInput,
} from "./style";
import { DarkSelect } from "../../components/Select";
import CarGallery from "../../components/CarGallery";
import Pagenation from "../../components/Pagenation";
import PagenationProvider from "../../contexts/PagenationContextProvider";

const DisplayAll: FC = () => {
  return (
    <PagenationProvider>
      <DisplayAllDiv>
        <Container>
          <SearchAndFilter>
            <SearchForm>
              <SearchInput></SearchInput>
              <SearchButton>
                <Button label="Suchen" />
              </SearchButton>
            </SearchForm>
            <FilterForm>
              <FilterCondition>
                <DarkSelect label="Marke" icon="arrowdown" />
                <DarkSelect label="Preis" icon="arrowdown" />
                <DarkSelect label="Erstzulassung" icon="arrowdown" />
                <DarkSelect label="Getriebe" icon="arrowdown" />
                <DarkSelect label="Kilometer" icon="arrowdown" />
                <DarkSelect label="Kraftstoff" icon="arrowdown" />
              </FilterCondition>
              <DarkSelect label="Sortieren nach" icon="sort" />
            </FilterForm>
          </SearchAndFilter>
          <CarGallery />
          <Pagenation />
        </Container>
      </DisplayAllDiv>
    </PagenationProvider>
  );
};

export default DisplayAll;
