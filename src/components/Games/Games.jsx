import "./Games.css";
import Modal from "../Modal/Modal";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";



const Games = ({ local }) => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const ref = useRef(null);
  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username") !== null) {
      setIsUserLogged(true);
    } else setIsUserLogged(false);
  }, [local]);

  function handleModal() {
    setModal(true);
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/games")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function handleSlide(type) {
    if (type === "right") {
      ref.current.scrollBy({ left: 200 });
    } else {
      ref.current.scrollBy({ left: -200 });
    }
  }

  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <div className="Games">
        <img
          type="button"
          src="https://www.freepnglogos.com/uploads/assassins-creed-logo-png/assassins-creed-logo-ubisoft-owns-the-mess-that-was-assassin-creed-unity-3.png"
          onClick={() => handleSlide("left")}
          className="btn-slide-left"
        ></img>

        {isUserLogged ? (
          <ul ref={ref} className="ul-games">
            {data.map((data) => (
              <Link className="games-link" to={`/games-details/${data.id}`}>
                <li id={data.id} key={data.id}>
                  <div className="img-games">
                    <img className="img-poster" src={data.poster}></img>
                    <div className="overlay">
                      <h3 className="h3-games">{data.name}</h3>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <ul ref={ref} className="ul-games">
            {data.map((data) => (
              <Link className="games-link" onClick={handleModal}>
                <li id={data.id} key={data.id}>
                  <div className="img-games">
                    <img className="img-poster" src={data.poster}></img>
                    <div className="overlay">
                      <h3 className="h3-games">{data.name}</h3>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        )}

        <img
          type="button"
          src="https://www.freepnglogos.com/uploads/assassins-creed-logo-png/assassins-creed-logo-ubisoft-owns-the-mess-that-was-assassin-creed-unity-3.png"
          onClick={() => handleSlide("right")}
          className="btn-slide-right"
        ></img>
      </div>
    </>
  );
};

export default Games;
