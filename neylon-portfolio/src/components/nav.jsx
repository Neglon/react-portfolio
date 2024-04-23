import React from "react";
import '../index.css';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul className="">
        <li className="">
          <a href="/" onClick={() => handlePageChange("About")}>
            About me
          </a>
        </li>
        <li className={` ${currentPage === "Portfolio" && 'navActive'}`}>
          <a href="/portfolio" onClick={() => handlePageChange("Portfolio")}>
            Portfolio
          </a>
        </li>
        <li className={` ${currentPage === "Contact" && 'navActive'}`}>
          <a href="/contact" onClick={() => handlePageChange("Contact")}>
            Contact
          </a>
        </li>
        <li className={` ${currentPage === "Resume" && 'navActive'}`}>
          <a href="/resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;