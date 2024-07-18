import "./Logout.css";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

const Logout = ({ setModalLogout, setLocal }) => {
  useLockBodyScroll();

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("username");
    navigate("/Homepage");
    setModalLogout(false);
    setLocal((prev) => !prev);
  }

  return (
    <>
      <div
        className="Logout"
        onClick={() => setModalLogout(false)}
      ></div>
      <div className="dialog-logout">
        <h1>Are you sure?</h1>
        <p>Are you sure you want to log out of your account?</p>
        <div className="btn-logout">
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => setModalLogout(false)}>Back to Home</button>
        </div>
      </div>
    </>
  );
};

export default Logout;
