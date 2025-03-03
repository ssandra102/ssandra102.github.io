import './App.css'
import Content from './components/Content.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Blog from './components/Blog.jsx'
import Projects from './components/Projects.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Content />
      {/* <About /> */}
      <Projects />
      <Blog />
      
    </>
  )
}
