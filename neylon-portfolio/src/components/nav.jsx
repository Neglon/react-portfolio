import React from "react";


function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about" onClick={() => handlePageChange("About")}>
            About me
          </a>
        </li>
        <li className={`mx-2 ${currentPage === "Portfolio" && 'navActive'}`}>
          <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
            Portfolio
          </a>
        </li>
        <li className={`mx-2 ${currentPage === "Contact" && 'navActive'}`}>
          <a href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact
          </a>
        </li>
        <li className={`mx-2 ${currentPage === "Resume" && 'navActive'}`}>
          <a href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;