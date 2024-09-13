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
// capillary
import C_images from './capillary/c_images';
import C_explaination from './capillary/c_explaination';
import C_issues from './capillary/c_issues';
// uv
import Uv_images from './uv/uv_images';
import UV_explaination from './uv/uv_explaination';
import UV_issues from './uv/uv_issues';
// tama
import Tama_images from './tama/tama_images';
import Tama_explaination from './tama/tama_explaination';
import Tama_issues from './tama/tama_issues';

// ctd
import CTD_images from './ctd/ctd_images';
import CTD_explaination from './ctd/ctd_explaination';
import CTD_issues from './ctd/ctd_issues';
// last 3
import TAMA_label_img from './last_3/tama_label_img';
import CTD_label_img from './last_3/ctd_label_img';
import Pencil_draw_img from './last_3/pencil_draw_img';
import Circled_spots from './last_3/circled_spots';

// spotted
import Spotted_img from './spotted/spotted_img';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* spotted */}
        <Route path='/spotted-images' element={<Spotted_img />} />
        {/* pencil */}
        <Route path='/p-images' element={<P_images />} />
        <Route path='/p-explaination' element={<P_explaination />} />
        <Route path='/p-issues' element={<P_issues />} />
        {/* silica */}
        <Route path='/s-image' element={<S_image />} />
        <Route path='/s-explaination' element={<S_explaination />} />
        <Route path='/s-issues' element={<S_issues />} />
        {/* Line */}
        <Route path='/l-image' element={<L_image />} />
        <Route path='/l-explaination' element={<L_explaination />} />
        {/* capillarry */}
        <Route path='/c-image' element={<C_images />} />
        <Route path='/c-explaination' element={<C_explaination />} />
        <Route path='/c-issues' element={<C_issues />} />
        {/* uv */}
        <Route path='/uv-image' element={<Uv_images />} />
        <Route path='/uv-explaination' element={<UV_explaination />} />
        <Route path='/uv-issues' element={<UV_issues />} />
        {/* tama */}
        <Route path='/tama-image' element={<Tama_images />} />
        <Route path='/tama-explaination' element={<Tama_explaination />} />
        <Route path='/tama-issues' element={<Tama_issues />} />
        {/* ctd */}
        <Route path='/ctd-image' element={<CTD_images />} />
        <Route path='/ctd-explaination' element={<CTD_explaination />} />
        <Route path='/ctd-issues' element={<CTD_issues />} />
        {/* last3 */}
        <Route path='/tama-label-image' element={<TAMA_label_img />} />
        <Route path='/ctd-label-image' element={<CTD_label_img />} />
        <Route path='/pencil-draw-image' element={<Pencil_draw_img />} />
        <Route path='/circled-spots-image' element={<Circled_spots />} />
      </Routes>
    </Router>
  );
}
