import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div class="header">
        <a href="#default" class="logo">
          Sehrish Zarin
        </a>
        <div class="header-right">
          <a class="active" href="https://www.linkedin.com/in/sehrish-zarin/">
            Linkedin
          </a>
          <a href="https://github.com/sehrishzarin">Github</a>
          <a href="#about">About</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
