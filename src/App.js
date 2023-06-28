import React from "react"
import './App.css';
import MainPage from "./container/MainPage";
import LoginPage from "./container/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="wrapper">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage/>}></Route>
              <Route path="/main" element={<MainPage />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
