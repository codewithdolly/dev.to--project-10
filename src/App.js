import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";
import {
  DevPodcast,
  Header,
  LeftSidebar,
  MainBody,
  RightSidebar,
} from "./Components";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          {/* Header imported */}
          <Header />
          {/* adding Dev podcast page */}
          <DevPodcast />

          {/* boddy adding */}
          <div className="app--body">
            <LeftSidebar />
            <MainBody />
            <RightSidebar />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
