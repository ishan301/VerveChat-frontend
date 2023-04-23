import React from "react";
import "./AppVideo.scss";
import Header from "../Header/Header";
import Login from "../Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

function AppVideo() {
  return (
    <div className="app-video">
      <Header />
      <div className="app-video-box">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default AppVideo;
