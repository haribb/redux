import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Photos from "./components/Photos";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
        <Route path="/" exact element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default App;
