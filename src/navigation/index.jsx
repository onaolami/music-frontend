import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "../pages/signup";
import LoginPage from "../pages/login";
import HomePage from "../pages/homepage";
import SongPage from "../pages/songpage";
import UploadPage from "../pages/uploadpage";
import SuccessPage from "../pages/successpage";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="songpage" element={<SongPage />} />
        <Route path="uploadpage" element={<UploadPage/>} />
        <Route path="successpage" element={<SuccessPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
