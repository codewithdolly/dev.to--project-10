import React from 'react'
import {Header} from "./Components"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <>
     <Header />

    </>
    </BrowserRouter>
  )
}

export default App;
