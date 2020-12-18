import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import AddExamPage from "./pages/AddExamPage";
import ExamListPage from "./pages/ExamListPage";

import ExamProvider from "./contexts/examContext";

function App() {
  return (
    <ExamProvider>
      <Router>
        <Switch>
          <Route path="/exam-list">
            <ExamListPage />
          </Route>
          <Route path="/add-exam">
            <AddExamPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ExamProvider>
  );
}

render(
  <App />,
  document.getElementById("root")
);