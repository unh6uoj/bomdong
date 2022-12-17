import React from "react";
import "./header.scss";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2 id="title">제목</h2>
      <div id="category">
        <Link to="diary" className="category-item">
          일기
        </Link>
        <span className="category-item">가계부</span>
        <span className="category-item">갤러리</span>
        <span className="category-item">달력</span>
      </div>
      <div id="dark-mode-container"></div>
    </header>
  );
}

export default Header;
