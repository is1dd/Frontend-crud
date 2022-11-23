import React, { useContext, useEffect, useState } from 'react'
import Users from './Components/Users';
import Creation from './Components/Creation';
import {Link, useNavigate} from "react-router-dom"
import { useRef } from "react";
import Pagination from "./Components/Pagination";
import { ApiContext } from './context/Apicontext';
import AllRoutes from './Routes/AllRoutes';

function App() {
  const redirect = useNavigate();

  return (
    
    <main>
      {/* <h1 onClick={()=>redirect('/')}>Back to HomePage</h1> */}
      <AllRoutes/> 
    </main>
   

      


        
   


   
  )
}

export default App