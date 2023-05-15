import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Routes history={history}>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
