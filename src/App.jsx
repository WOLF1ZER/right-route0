import React, {useState} from 'react'
import Home from "./Pages/Home";
import Documentation from './Pages/Documentation';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Aboutus from './Pages/Aboutus';
import Contacts from './Pages/Contacts';
import ScrollToTheTop from "./components/ScrollToTheTop"


const App = () => {

  return (
    <Router>
      <ScrollToTheTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/docs" element={<Documentation />}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/contacts" element={<Contacts/>}/>

      </Routes>
    </Router>
  );
};

export default App;
