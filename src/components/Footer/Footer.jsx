import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="Footer">
        <div className="footer-content">
          <div>
            <h1>ASSASSIN'S CREED</h1>
            <ul>
              <li>
                <Link className="footer-link" to="/">
                  COVER
                </Link>
              </li>

              <li>
                <Link to="/HomePage" className="footer-link">
                  GAMES
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-content">
          <img
            className="img-footer"
            src="https://www.awicons.com/free-icons/download/game-icons/assassins-creed-icons-by-archigraphs/png/512/Ezio.png"
          ></img>
        </div>

        <div className="footer-content">
          <div>
            <h1>ABOUT ME</h1>
            <ul>
              <li>
                <Link className="footer-link" to="/AboutMe">
                  ME
                </Link>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/francesco-paolo-ferdico/"
                  className="footer-link"
                >
                  LINKEDIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
