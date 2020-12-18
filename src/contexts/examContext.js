import React, { createContext, useState } from "react";

export const ExamContext = createContext();

export default function ExamProvider(props) {
  const [exam, setExam] = useState({});
  
  const value = {
    exam,
    setExam
  }

  return(
    <ExamContext.Provider value={value}>
      {props.children}
    </ExamContext.Provider>
  );
}