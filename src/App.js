import React, { useState } from 'react'
import DropDown from './components/DropDown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar'
import { InfoData, InfoDataTwo } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import './App.css'
import Section2 from './components/Section2';
import { Section2Data } from './data/Section2Data';
import Section3 from './components/Section3';
import Footer from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <Section2 data={Section2Data}/>
      <Section3 />
      <InfoSection {...InfoDataTwo}/>
      <Footer />
    </>
  );
}

export default App;
