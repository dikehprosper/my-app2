import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import Crud from "./components/crud/index";


const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Routes history={history}>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  // <Crud />
  );
}

export default App;
