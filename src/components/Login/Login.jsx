import "./Login.css";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useState } from "react";

const Login = ({ setModalLogin, setLocal }) => {
  useLockBodyScroll();
  const [enteredValues, setEnteredValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (
      enteredValues.username.indexOf(".") === -1 ||
      enteredValues.password.length < 8
    ) {
      return setError(true);
    }
    localStorage.setItem("username", enteredValues.username);
    setModalLogin(false);
    setLocal((prev) => !prev);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  return (
    <>
      <div
        className="Login"
        onClick={() => setModalLogin(false)}
      ></div>

      <dialog className="dialog" open>
        <form onSubmit={handleSubmit}>
          <img
            className="login-img"
            src="https://www.freepnglogos.com/uploads/assassins-creed-logo-png/meaning-assassins-creed-logo-and-symbol-history-and-0.png"
          ></img>
          <div>
            <input
              id="username"
              type="username"
              name="username"
              onChange={(event) =>
                handleInputChange("username", event.target.value)
              }
              value={enteredValues.username}
              placeholder="Username"
            ></input>
          </div>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(event) =>
                handleInputChange("password", event.target.value)
              }
              value={enteredValues.password}
              placeholder="Password"
            ></input>
          </div>
          <button className="btn-login" onClick={handleInputChange}>
            Login
          </button>
          {error && (
            <p className="text-error">Password or Username are not valid!</p>
          )}
        </form>
      </dialog>
    </>
  );
};

export default Login;
