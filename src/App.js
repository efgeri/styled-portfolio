import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";
import styled from "styled-components";
import Introduction from "./components/Introduction";
import MyWork from "./components/MyServices";



function App() {
  return (
    <>
    <div className="App">
      <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> 
      </Router>
    </div>
    <footer>
            <a href="mailto:efgeri@gmail.com" class="footer__link">efgeri@gmail.com</a>
            <ul class="social-list">
                <li class="social-list__item"><a class="social-list__link" href="https://codepen.io">a</a></li>
                <li class="social-list__item"><a class="social-list__link" href="http://dribbble.com">b</a></li>
                <li class="social-list__item"><a class="social-list__link" href="https://twitter.com">c</a></li>
                <li class="social-list__item"><a class="social-list__link" href="https://github.com">d</a></li>
            </ul>
        </footer>
        </>
  );
}

export default App;

