import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import '../index.css';

function Footer() {
  return (
    <div className="footer">
        <div>
            <GitHub />
            <LinkedIn />
            <Email />
        </div>

        <p> &copy; 2024 Thomas Neylon</p>
    </div>
  );
}

export default Footer;