import React from 'react'
import './CSS/main.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyleGuide from './StyleGuide';
import './CSS/StyleGuide.css'
import './CSS/main.css'

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/design" element={<StyleGuide/>}/>
      </Routes>
    </Router>
  );
}

export default App;
