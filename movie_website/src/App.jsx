import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import UploadData from "./views/UploadData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/upload" element={<UploadData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
