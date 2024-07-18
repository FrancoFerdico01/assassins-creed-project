import "./GamesDetails.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const GamesDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState({});

  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(`http://localhost:5000/api/v1/games/${id}`);
      if (!res.ok) {
        navigate("/error");
      }
      const data = await res.json();
      setDataDetail(data);
    }

    fetchDetails();
  }, []);

  /**
   * @function getQueryByUrl - funzione che ritorna una query
   * @param {string} link - stringa a link es http://link.com
   * @param {string} queryParam - stringa della query dalla quale estrapolare il valore
   * @returns - valore della query alla quale abbiamo passato
   */
  function getQueryByUrl(link, queryParam) {
    const url = new URL(link).search;
    const getKey = new URLSearchParams(url).get(queryParam);
    return getKey;
  }

  function handleClick() {
    navigate("/Homepage");
  }

  console.log(dataDetail);

  return (
    <>
      <Navbar />
      <div className="GamesDetails">
        <div className="gamesDetails-content">
          <img className="gamesDetails-img" src={dataDetail.poster} />
          <h1>{dataDetail.name}</h1>
          <p className="gamesDetails-genre">{dataDetail.genre}</p>
          <p className="gamesDetails-trama">{dataDetail.synopsis}</p>
          <button onClick={handleClick} className="gamesDetails-btn">
            Back to Home
          </button>
        </div>
        <div className="trailer">
          {dataDetail?.trailer && (
            <iframe
              className="gamesDetails-trailer"
              src={`https://www.youtube.com/embed/${getQueryByUrl(
                dataDetail.trailer,
                "v"
              )}`}
            />
          )}
          <ul className="gamesDetails-date">
            <li>Developer: {dataDetail.publisher}</li>
            <li>Release date: {dataDetail.release_date}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GamesDetails;
