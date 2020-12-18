import React from "react";
import { useHistory } from "react-router-dom"
import styled from "styled-components";
import { MdAddCircle, MdFindInPage } from "react-icons/md";

export default function Button(props) {
  const { icon, command } = props;
  const history = useHistory();

  function goToNextPage() {
    if (icon === MdAddCircle) {
      history.push("/add-exam");
    } else {
      history.push("/exam-list");
    }
  }

  return(
    <ButtonBox onClick={() => goToNextPage()} icon={icon}>
      <Icon>
        {icon === MdAddCircle
          ? <MdAddCircle />
          : <MdFindInPage />
        }
      </Icon>
      <p>{command}</p>
    </ButtonBox>
  );  
}

const ButtonBox = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  margin: 10px;
  border-radius: 5px;
  width: fit-content;
  min-width: 220px;
  cursor: pointer;
  background: #fdb44b;

  p {
    font-family: 'Dosis', sans-serif;
    font-size: 20px;
    font-weight: 700;
  }
`;

const Icon = styled.div`
  font-size: 25px;
  margin-right: 10px;
`;