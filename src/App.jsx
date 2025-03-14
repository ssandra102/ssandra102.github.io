import './App.css'

import ReactDev from './components/reactdev/ReactDev.jsx'
import MlDev from './components/ml-dev/MlDev.jsx'
import Content from './components/homepage/Content.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          {/* <Route path="/reactdev" element={<ReactDev />} /> */}
          <Route path="/ml-dev" element={<MlDev />} />
        </Routes>
      </Router>
      
    </>
  )
}
