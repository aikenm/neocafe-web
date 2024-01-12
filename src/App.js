import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

const App = () => {
  
  const refreshToken = async () => {
    const token = localStorage.getItem("refreshToken"); 
  
    try {
      const response = await axios.post('https://neo-cafe.org.kg/api/token/refresh/', {
        refresh: token
      }, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': 'aIs13Ron8U9kEKxdFuVaxPmqzTpzuaWbmyUCjdD0NGUkRtFFO5jEqnhO4Mv8AWOa'
        }
      });
  
      localStorage.setItem("accessToken", response.data.access); 
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  useEffect(() => {
    const interval = 30 * 60 * 1000; 

    const intervalId = setInterval(() => {
      const token = localStorage.getItem("refreshToken");
      if (token) {
        refreshToken();
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main/:activePage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
