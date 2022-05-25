import React from 'react';
// First we import our Hello component from our components folder.
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return(
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
