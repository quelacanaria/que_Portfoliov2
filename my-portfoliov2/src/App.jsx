import Header from './Components/Header' 
import Home from './Components/Home' 
import About from './Components/About' 
import Projects from './Components/Projects' 
import Forms from './Components/Forms' 
import Links from './Components/Links'
import HeaderFooter from './Components/HeaderFooter'
import Card from './Components/Card'
import React, { useState, useEffect } from 'react'
import useWindowHeight from './Components/customHooks/useWindowHeight'
function App() { 
  const [currentSection, setCurrentSection] = useState();
  const windowHeight = useWindowHeight();
  useEffect(() => {
  const sections = document.querySelectorAll('section[data-section]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(windowHeight >= 487 && windowHeight <= 800){
        if(entry.isIntersecting){
        setCurrentSection(entry.target.getAttribute('data-section'))
        }
      }
    })
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));

  return() => observer.disconnect();
}, []);

    return ( 
      <> 
        <Header currentSection = {currentSection} />  
        <section id="home" data-section='home' >
          <Home currentSection = {currentSection} />
          <Card currentSection = {currentSection} />  
        </section>
        <section id="about" data-section='about'><About currentSection = {currentSection}  /></section>
        <section id="projects" data-section='projects'><Projects currentSection = {currentSection} /></section>
        <section id="contact" data-section='contact'><Forms currentSection = {currentSection}  /></section>
        <section id='links' data-section='links'><Links currentSection = {currentSection} /></section>
        <HeaderFooter currentSection = {currentSection} />
      </> 
    ) 
  } 
  
  export default App