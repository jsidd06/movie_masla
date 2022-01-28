import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./views/Header";
import HomeScreen from "./views/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
