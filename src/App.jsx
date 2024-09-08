/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import P_images from './pencil/p_images';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/p-images' element={<P_images />} />
      </Routes>
    </Router>
  );
}
