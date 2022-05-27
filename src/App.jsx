import React from 'react';
// First we import our Hello component from our components folder.
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return(
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
