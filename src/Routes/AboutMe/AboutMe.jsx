import React from "react";
import Me from "../../assets/me.jpeg";
import "./AboutMe.css";
import Navbar from "../../components/Navbar/Navbar";
import Backimage from "../../assets/sfondo.jpg";
import Footer from "../../components/Footer/Footer";

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="AboutMe">
        <div className="background">
          <div className="gradient"></div>
          <img className="back-img" src={Backimage}></img>
        </div>
        <div className="Me">
        <img src={Me}></img>
        <div className="Me-h1">
          <h1>Francesco Paolo Ferdico</h1>
          <p>Front-end Developer</p>
          </div>
        </div>
      </div>
      <div className="whoAmI">
        <div className="point">
          <img src="https://www.freepnglogos.com/uploads/assassins-creed-logo-png/assassins-creed-logo-assassin-creed-logo-vector-download-36.png"></img>
          <h1>WHO AM I?</h1>
        </div>
        <p>
          I'm Francesco Paolo Ferdico and i approached coding in 2023 and the goal
          is to make it a job. <br />
          <br />
          I have always been fascinated by the world of programming, therefore,
          I decided to undertake this path. <br />I started by purchasing
          programming courses on Udemy and, in this year and a half of study, I
          started from the basics (HTML, CSS and JS) up to studying and using
          frameworks such as React.js and Next.js. <br />
          While waiting to find a job, I started putting my skills into
          practice, doing small basic exercises or doing projects like this.
          <br /> 
          <br />
          I am very happy with the progress made so far and will continue
          like this until I reach my goal.
        </p>
      </div>
      <div className="AboutTheProject">
        <div className="point">
          <img src="https://www.freepnglogos.com/uploads/assassins-creed-logo-png/assassins-creed-logo-assassin-creed-logo-vector-download-36.png"></img>
          <h1>ABOUT THE PROJECT</h1>
        </div>
        <ul type='circle' className="aboutUl">
         These are the technologies I used during the development:
         <li>HTML5</li>
         <li>CSS3</li>
         <li>JAVASCRIPT</li>
         <li>REACT.JS</li>
         <li>REACT ROUTER</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default AboutMe;
