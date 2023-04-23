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
  );
}

export default App;

