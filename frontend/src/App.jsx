/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import SectionContent from './components/SectionContent';
import NavBar from './components/NavBar';
import {NextUIProvider} from "@nextui-org/react";
import ReactPageScroller from 'react-page-scroller';
import {useNavigate} from 'react-router-dom';
import {
  Routes, Route
} from 'react-router-dom'


import './App.css'; 
import MainPage from './components/MainPage';
const App = () => {

  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <main className="dark text-foreground bg-background">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* ... */}
      </Routes>

              </main  >
    </NextUIProvider>
  )
}

export default App