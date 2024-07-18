import "./Navbar.css";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import { useState } from "react";

const Navbar = ({ setLocal }) => {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);

  function handleClick(type) {
    if (type === "login") {
      setModalLogin(true);
    } else setModalLogout(true);
  }

  return (
    <>
      {modalLogout && (
        <Logout setLocal={setLocal} setModalLogout={setModalLogout} />
      )}
      {modalLogin && (
        <Login setLocal={setLocal} setModalLogin={setModalLogin} />
      )}
      <nav className="Navbar">
        <div className="logo">
          <img
            className="Home-img"
            src="https://www.freepnglogos.com/uploads/assassins-creed-logo-png/meaning-assassins-creed-logo-and-symbol-history-and-0.png"
            alt=""
          />
          <h2 className="Nav-h2">Nothing is true... everything is permitted</h2>
        </div>
        <div className="log">
          <img
            className="log-img"
            src="https://www.freepnglogos.com/uploads/assassins-creed-logo-png/assassins-creed-logo-assassin-creed-logo-vector-download-36.png"
          ></img>

          {localStorage.getItem("username") === null ? (
            <button onClick={() => handleClick("login")} className="btn-log">
              Login
            </button>
          ) : (
            <button
              className="btn-username"
              onClick={() => handleClick("logout")}
            >
              {localStorage.getItem("username")}
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
