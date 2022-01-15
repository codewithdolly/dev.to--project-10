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
    {/* Header imported */}
     <Header />

     {/* boddy adding */}
     <div>
       {/* left sidebar */}
       
       {/* Main Body */}
       {/* Right sidebar */}
     </div>
     

    </>
    </BrowserRouter>
  )
}

export default App;
