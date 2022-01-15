import React from 'react'
import {Header, LeftSidebar, MainBody, RightSidebar} from "./Components"
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
<LeftSidebar />
       {/* Main Body */}
       <MainBody />
       {/* Right sidebar */}
       <RightSidebar />
     </div>
     

    </>
    </BrowserRouter>
  )
}

export default App;
