import React, { useContext, useState } from "react";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import { MdFindInPage } from "react-icons/md";
import axios from "axios";
import { ExamContext } from "../contexts/examContext";

export default function AddExamPage() {
  const { exam, setExam } = useContext(ExamContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [professor,  setProfessor] = useState('');
  const [category, setCategory] = useState('');
  const [link, setLink] = useState('');

  function sendNewExam(e) {
    e.preventDefault();

    if(loading) return;

    setExam({
      name,
      discipline,
      professor,
      category,
      link
    });

    console.log(exam);
    // axios.post("http://localhost:3000/api/exams", exam);
  }

  return(
    <MainContainer>
      <Header>
        <Icon><MdFindInPage /></Icon>
      </Header>
      <AddExamContainer>
        <AddHeader><h2>Adicionar nova(s) prova(s)</h2></AddHeader>
        <AddExamForm onSubmit={(e) => sendNewExam(e)}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" value={name} placeholder="Ex.: Prova_X_2020.1" onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="discipline">Disciplina:</label>
          <input type="text" id="discipline" value={discipline} placeholder="Ex.: Cálculo I, Eletromagnetismo ..." onChange={(e) => setDiscipline(e.target.value)}/>
          <label htmlFor="professor">Professor(a):</label>
          <input type="text" id="professor" value={professor} placeholder="Ex.: Alessandro, José, Miriam ..." onChange={(e) => setProfessor(e.target.value)}/>
          <label htmlFor="category">Categoria:</label>
          <input type="text" id="category" value={category} placeholder="Ex.: P1, P2, 2ch, Outras..." onChange={(e) => setCategory(e.target.value)}/>
          <label htmlFor="link">Link:</label>
          <input type="url" id="link" value={link} placeholder="Carregue seu link" onChange={(e) => setLink(e.target.value)}/>
          <AddButton type="submit">Salvar</AddButton>
        </AddExamForm>
      </AddExamContainer>
    </MainContainer>
  );
}

const AddExamContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;

const AddHeader = styled.header`
  background: #fdb44b;
  padding: 15px 25px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;

  h2 {
    font-size: 35px;
    font-weight: 600;
  }
`;

const AddExamForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background: #005792;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;

  label {
    font-size: 20px;
    font-weight: 600;
  }

  input[type='text'],
  input[type='url'] {
    display: block;
    border: none;
    border-radius: 4px;
    margin: 5px 0 10px;
    padding: 0 16px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    outline: none;
  }
`;

const AddButton = styled.button`
  padding: 10px 25px;
  margin-top: 30px;
  border-radius: 7px;
  border: 1.5px solid black;
  justify-self: center;
  background: #fdb44b;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 25px;
  margin-right: 10px;
  border-radius: 50%;
  color: #fdb44b;
  cursor: pointer;
`;