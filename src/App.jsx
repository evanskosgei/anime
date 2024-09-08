/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
// pencil
import P_images from './pencil/p_images';
import P_explaination from './pencil/p_explaination';
import P_issues from './pencil/p_issues';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* pencil */}
        <Route path='/p-images' element={<P_images />} />
        <Route path='/p-explaination' element={<P_explaination/>} />
        <Route path='/p-issues' element={<P_issues/>} />
      </Routes>
    </Router>
  );
}
