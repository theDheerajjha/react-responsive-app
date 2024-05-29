import React from 'react';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="container">
    <header className="header">Responsive App</header>
    <main className="main">{children}</main>
    <footer className="footer">Footer</footer>
  </div>
);

export default Layout;
