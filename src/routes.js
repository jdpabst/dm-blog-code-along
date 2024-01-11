import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import TopicList from "./Components/TopicList/TopicList";

export default (
  <Routes>
    <Route exact path="/" element={ <Home /> } />
    <Route path="/topics" element={ <TopicList /> } />
  </Routes>
);