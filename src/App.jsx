/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
// pencil
import P_images from './pencil/p_images';
import P_explaination from './pencil/p_explaination';
import P_issues from './pencil/p_issues';

// silica
import S_image from './silica/s_image';
import S_explaination from './silica/s_explaination';
import S_issues from './silica/s_issues';

// line
import L_image from './line/l_image';
import L_explaination from './line/l_explaination';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* pencil */}
        <Route path='/p-images' element={<P_images />} />
        <Route path='/p-explaination' element={<P_explaination/>} />
        <Route path='/p-issues' element={<P_issues/>} />
        {/* silica */}
        <Route path='/s-image' element={<S_image/>} />
        <Route path='/s-explaination' element={<S_explaination/>} />
        <Route path='/s-issues' element={<S_issues/>} />
        {/* Line */}
        <Route path='/l-image' element={<L_image/>} />
        <Route path='/l-explaination' element={<L_explaination/>} />
      </Routes>
    </Router>
  );
}
