import "./App.css";
import { Link } from "react-router-dom";
import { useLockBodyScroll } from "@uidotdev/usehooks";

function App() {
  useLockBodyScroll();
  return (
    <>
      <div className="App">
        <img src="https://www.gamesoul.it/wp-content/uploads/2023/07/assassins-creed-11-titoli-in-lavorazione-gamesoul.jpg"></img>
      </div>
      <div className="app-text">
        <h1>ASSASSIN'S CREED</h1>
        <Link className="app-link" to="/HomePage">
          Discover the world of Ac
        </Link>
      </div>
    </>
  );
}

export default App;
