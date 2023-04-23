import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <header>
      <div class="logo">
        <img src={logo} alt="logo" width={200} />
      </div>
      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="/" class="nav__link">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="/about" class="nav__link">
              About me
            </a>
          </li>
          <li class="nav__item">
            <a href="/projects" class="nav__link">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// const Body = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #333;
//   color: #fff;
//   padding: 1rem;
// `;

// const List = styled.ul`
//   display: flex;
//   list-style: none;
// `;

// const ListItem = styled.li`
//   border-radius: 10px;
//   margin-left: 1rem;
//   padding: 0.5rem;

//   &:first-child {
//     margin-left: 0;

//   }

//   & > a {
//     color: #fff;
//     text-decoration: none;
//     transition: all 0.2s ease;

//     &:hover {
//       color: #ccc;
//       background-color: #fff;
//       color: #333;
//     }
//   }
// `;
