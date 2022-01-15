import React from "react";
import "./App.scss"
import { Header, LeftSidebar, MainBody, RightSidebar } from "./Components";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    
      <>
      <BrowserRouter>
      <div className="app">
        {/* Header imported */}
        <Header />

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
