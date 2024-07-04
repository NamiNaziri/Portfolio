/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import SectionContent from './components/SectionContent';
import NavBar from './components/NavBar';
import {NextUIProvider} from "@nextui-org/react";
import ReactPageScroller from 'react-page-scroller';
import {useNavigate} from 'react-router-dom';
import CVPage from './components/CV/CVPage';
import {
  Routes, Route, useLocation 
} from 'react-router-dom'


import './App.css'; 
import MainPage from './components/MainPage';
const App = () => {
  const [currentPrimary, setCurrentPrimary]=useState(0)
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    // Set the active route value when the route changes
    console.log(location.pathname)
    switch(location.pathname)
    {
      case '/':
        setCurrentPrimary(0);
        break;
      case '/cv':
        setCurrentPrimary(1);
        break;
      case '/contact':
        setCurrentPrimary(2);
        break;
    }
  }, [location]);

  return (
    <NextUIProvider navigate={navigate}>
      <main className="dark text-foreground bg-background">
      <div className="flex flex-col items-stretch h-screen ">
        
          <NavBar primary={currentPrimary}   />
        
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cv" element={<CVPage/>}/>
            {/* ... */}
          </Routes>
      </div>

              </main  >
    </NextUIProvider>
  )
}

export default App