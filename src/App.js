import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import WorkExperience from './Components/Work';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="page">
      <Header />

      <main className="container">
        <About />
        <Education />
        <Skills />
        <Projects />
        <WorkExperience />
      </main>

      <Footer />
    </div>
  );
}

export default App;
