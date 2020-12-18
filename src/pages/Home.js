import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import MainContainer from "../components/MainContainer";
import { MdAddCircle, MdFindInPage } from "react-icons/md";

export default function Home() {
  const add = 'Adicionar Prova(s)';
  const find = 'Procurar Prova(s)';
  
  return(
    <MainContainer>
      <HomeContainer>
        <Button icon={MdAddCircle} command={add}/>
        <Button icon={MdFindInPage} command={find}/>
      </HomeContainer>
    </MainContainer>
  );
}

const HomeContainer = styled.article`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;