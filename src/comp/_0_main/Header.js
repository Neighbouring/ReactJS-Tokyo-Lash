import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import LashLifting from './../_3_pages/servicos/LashLifting';

import '../../assets/css/styleHeader';

function Header() {
  return (
    <header id="header_header">
      <Router>
        <Link to="/">
          <div>HEADER</div>
        </Link>
        <nav id="header_nav">
          <ul id="header_ul">
            <li id="header_li">
              <Link className="header_link" to="/servicos/lash-lifting">
                Lash Lifting
              </Link>
            </li>
            <li id="header_li">
              <Link className="header_link" to="/servicos/extensao-de-cilios">
                Extensão de Cílios
              </Link>
            </li>
            <li id="header_li">
              <Link
                className="header_link"
                to="/servicos/design-de-sobrancelha"
              >
                Design de Sobrancelhas
              </Link>
            </li>
            <li id="header_li">
              <Link className="header_link" to="/servicos/micropigmentacao">
                Micropigmentação
              </Link>
            </li>
            <li id="header_li">
              <Link className="header_link" to="/servicos/brow-lamination">
                Brow Lamination
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/servicos/lash-lifting"
            element={<LashLifting />}
          ></Route>
          <Route
            path="/servicos/extensao-de-cilios"
            element={<LashLifting />}
          ></Route>
          <Route
            path="/servicos/extensao-de-cilios"
            element={<LashLifting />}
          ></Route>
        </Routes>
      </Router>
    </header>
  );
}

export default Header;
