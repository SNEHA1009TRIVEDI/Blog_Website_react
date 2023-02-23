//create a react compoent
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    
      <nav className='body-padding'>
      <div>
        <h1>The Artifact</h1>
        <p>
          <em>Culture & Art blog</em>
        </p>
      </div>
      <ul>
        <li>
          <a href='/blog'>Blog</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
    
  );
};

export default Header;
