import "./HomePage.css";
import backvideo from "../../assets/backvideo.mp4";
import Navbar from "../../components/Navbar/Navbar";
import Games from "../../components/Games/Games";
import Footer from "../../components/Footer/Footer";
import Plot from "../../components/Plot/Plot";
import { useState } from "react";

const HomePage = ({ modal, setModal }) => {
  const [local, setLocal] = useState(false);

  return (
    <>
      <div className="HomePage">
        <video src={backvideo} autoPlay loop muted />
        <Navbar setLocal={setLocal} />
        <Games local={local} modal={modal} setModal={setModal} />
      </div>
      <Plot />
      <Footer />
    </>
  );
};

export default HomePage;
