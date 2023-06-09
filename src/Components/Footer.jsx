import React from "react";
import logo from "../Assest/logo.png";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-flex">
          <div className="footer-heading">
            <img className="footer-image" src={logo} />
          </div>
          <div className="footer-content">
            <div className="footer-box">
              <strong>Quick Links</strong>
              <ul>
                <li>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALXSURBVHgBfZTLTxNRFMa/mc7QmT6oFQYolSrYggKCBEVQVEJ8hbAlbowmLNy49A+wbt2wcqFLExMNxoUSUVY0BjbyiiQoBmhawL7o+zFt5+UUaRVoOMlkTu7jd8/97ncvgSNDIZS9jEApPRREuUYnnKQFwxo1pUUuSRrJvBILSGIdUuIIRuSDwH0QRV35JeYpw7kKQ2Of/oTBwTSZ7DqbEBUS8R/ZjcS3qHtxOh1OoC/nBCEfghQB9YNUDdWr3Py0MDe67g71hIIRrdGkg8Nu898fvTIpf6Wff3+3uRoKuTJqxbsgTRHShjYN11VlTnTHR95MLT3zrqWaNQJDGSgjNJIWsaBimJiY7WJOUyd7Wlrm44va6CReS4W5ZBGSBkdzN6qaPy/NPQoGIiYDrUV1RTXqdQ2wsA2opFn1Ow6Xa/U2cUG4a++qq3RCIUuQwlaOnT/FZKzp/o2fmRZWw8KsAmrZWlhZqwqxoFpbg0JVcroCbz+4blWe0dZc35tPFSup0UkVy263gyWN0JIM9JReBZnAMcfBizmIsoikkEBCiAOSsZHiGPMCJgtyiKXt7Eg8kRdkWlFFJ4h/uhMHzrDQ5w9vSaCBOtiUfZqkfLH8xXbHiqTqLUoSMmIaMXXV33wQoWwYSTGFrMxDkCXUc+bt+EYuxqFNLkEK5sl7RZ72sDPd/XUeXs4jkg8jwAewnfHBx/sQzgWREpLg5Qz6O1vfS8vZgAuQ91WiR0gITuVX71zqGNOwuURSSCGYLUC8u/9ILqr6NY3hoY4vVj83EViLJ4uGK/lkHOPKNf8DwSCS3nuPr3riSFiTmVxVIBrU0EYFbKWyNTTY/uoy0zm2/XHz11pmIDuNpwpQ5u68wBxtbmWMll5dQ9VZpklv19rEmJQMr+TW/bMBt28GOw/RnSXK2f7/+Guicaqp1kQLkp7MEoKiC0H0qJo/wYB01I0uG8ruc6AQR435AwTBRtWReuIrAAAAAElFTkSuQmCC" />
                  <a>
                    {" "}
                    <Link to="/Cookie_Policy" className="text_de" >Cookie Policy</Link>{" "}
                  </a>
                </li>

                <li>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALXSURBVHgBfZTLTxNRFMa/mc7QmT6oFQYolSrYggKCBEVQVEJ8hbAlbowmLNy49A+wbt2wcqFLExMNxoUSUVY0BjbyiiQoBmhawL7o+zFt5+UUaRVoOMlkTu7jd8/97ncvgSNDIZS9jEApPRREuUYnnKQFwxo1pUUuSRrJvBILSGIdUuIIRuSDwH0QRV35JeYpw7kKQ2Of/oTBwTSZ7DqbEBUS8R/ZjcS3qHtxOh1OoC/nBCEfghQB9YNUDdWr3Py0MDe67g71hIIRrdGkg8Nu898fvTIpf6Wff3+3uRoKuTJqxbsgTRHShjYN11VlTnTHR95MLT3zrqWaNQJDGSgjNJIWsaBimJiY7WJOUyd7Wlrm44va6CReS4W5ZBGSBkdzN6qaPy/NPQoGIiYDrUV1RTXqdQ2wsA2opFn1Ow6Xa/U2cUG4a++qq3RCIUuQwlaOnT/FZKzp/o2fmRZWw8KsAmrZWlhZqwqxoFpbg0JVcroCbz+4blWe0dZc35tPFSup0UkVy263gyWN0JIM9JReBZnAMcfBizmIsoikkEBCiAOSsZHiGPMCJgtyiKXt7Eg8kRdkWlFFJ4h/uhMHzrDQ5w9vSaCBOtiUfZqkfLH8xXbHiqTqLUoSMmIaMXXV33wQoWwYSTGFrMxDkCXUc+bt+EYuxqFNLkEK5sl7RZ72sDPd/XUeXs4jkg8jwAewnfHBx/sQzgWREpLg5Qz6O1vfS8vZgAuQ91WiR0gITuVX71zqGNOwuURSSCGYLUC8u/9ILqr6NY3hoY4vVj83EViLJ4uGK/lkHOPKNf8DwSCS3nuPr3riSFiTmVxVIBrU0EYFbKWyNTTY/uoy0zm2/XHz11pmIDuNpwpQ5u68wBxtbmWMll5dQ9VZpklv19rEmJQMr+TW/bMBt28GOw/RnSXK2f7/+Guicaqp1kQLkp7MEoKiC0H0qJo/wYB01I0uG8ruc6AQR435AwTBRtWReuIrAAAAAElFTkSuQmCC" />
                  <a>
                    {" "}
                    <Link to="/Terms_and_Conditions" className="text_de" >
                      Terms &amp; Services
                    </Link>{" "}
                  </a>
                </li>
                <li>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALXSURBVHgBfZTLTxNRFMa/mc7QmT6oFQYolSrYggKCBEVQVEJ8hbAlbowmLNy49A+wbt2wcqFLExMNxoUSUVY0BjbyiiQoBmhawL7o+zFt5+UUaRVoOMlkTu7jd8/97ncvgSNDIZS9jEApPRREuUYnnKQFwxo1pUUuSRrJvBILSGIdUuIIRuSDwH0QRV35JeYpw7kKQ2Of/oTBwTSZ7DqbEBUS8R/ZjcS3qHtxOh1OoC/nBCEfghQB9YNUDdWr3Py0MDe67g71hIIRrdGkg8Nu898fvTIpf6Wff3+3uRoKuTJqxbsgTRHShjYN11VlTnTHR95MLT3zrqWaNQJDGSgjNJIWsaBimJiY7WJOUyd7Wlrm44va6CReS4W5ZBGSBkdzN6qaPy/NPQoGIiYDrUV1RTXqdQ2wsA2opFn1Ow6Xa/U2cUG4a++qq3RCIUuQwlaOnT/FZKzp/o2fmRZWw8KsAmrZWlhZqwqxoFpbg0JVcroCbz+4blWe0dZc35tPFSup0UkVy263gyWN0JIM9JReBZnAMcfBizmIsoikkEBCiAOSsZHiGPMCJgtyiKXt7Eg8kRdkWlFFJ4h/uhMHzrDQ5w9vSaCBOtiUfZqkfLH8xXbHiqTqLUoSMmIaMXXV33wQoWwYSTGFrMxDkCXUc+bt+EYuxqFNLkEK5sl7RZ72sDPd/XUeXs4jkg8jwAewnfHBx/sQzgWREpLg5Qz6O1vfS8vZgAuQ91WiR0gITuVX71zqGNOwuURSSCGYLUC8u/9ILqr6NY3hoY4vVj83EViLJ4uGK/lkHOPKNf8DwSCS3nuPr3riSFiTmVxVIBrU0EYFbKWyNTTY/uoy0zm2/XHz11pmIDuNpwpQ5u68wBxtbmWMll5dQ9VZpklv19rEmJQMr+TW/bMBt28GOw/RnSXK2f7/+Guicaqp1kQLkp7MEoKiC0H0qJo/wYB01I0uG8ruc6AQR435AwTBRtWReuIrAAAAAElFTkSuQmCC" />
                  <a>
                    {" "}
                    <Link className="text_de" to="/Privacy_Policy">Privacy Policy</Link>{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <strong>Quick Links</strong>
              <ul>
                <li>
                  <div className="discord me-3">
                    <BsTwitter />
                  </div>
                  <a
                    href="https://twitter.com/LaRace_Official"
                    target="_blank"
                    className="text_de"
                  >
                    Twitter
                  </a>
                </li>

                <li>
                  <div className="discord me-3">
                    <FaTelegramPlane />
                  </div>
                  <a
                    href="http://t.me/nftxpress"
                    target="_blank"
                    className="text_de"
                  >
                    Telegram
                  </a>
                </li>
                <li className="me-2">
                  <div className="discord me-3">
                    <BsDiscord />
                  </div>
                  <a
                    href="https://discord.com/invite/3EP92kbE3B"
                    target="_blank"
                    className="text_de"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <span>All Rights Reserved</span>
            <span>© LaRace</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
