import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main/:activePage" element={<MainPage />} />
        <Route path="/main/orders/:status" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
