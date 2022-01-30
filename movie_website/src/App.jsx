import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DownloadScreen from "./views/DownloadScreen";
import HomeScreen from "./views/HomeScreen";
import UploadData from "./views/UploadData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/upload" element={<UploadData />} />
        <Route path="/download/:id" element={<DownloadScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
