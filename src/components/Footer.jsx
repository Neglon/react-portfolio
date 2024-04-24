import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import '../index.css';

function Footer() {
  return (
    <div className="footer">
        <div>
            <GitHub id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "https://github.com/Neglon")
            }
          />
            <LinkedIn id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "https://www.linkedin.com/")
            }
          />
            <Email id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "mailto:thomasfneylon@gmail.com")
            }
          />
        </div>

        <p> &copy; 2024 Thomas Neylon</p>
    </div>
  );
}

export default Footer;