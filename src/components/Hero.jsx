import React, { useEffect, useState } from "react";

import { Link } from "react-scroll";
import { Icon } from "semantic-ui-react";

export default function Hero() {
  const [zoom, setZoom] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-1 mr-10">
          <h1 className="hero-1-title">Full Stack {"{MERN}"} Developer🙋🏽‍♂️</h1>
          <p className="hero-1-subTitle">
            Hey!👋, am Lokesh Kumar.A Passionate Full Stack Web Developer[MERN]
            based on Chennai,India 🇮🇳
          </p>
          <div className="hero-1-links">
            <Icon
              onClick={() =>
                window.open(
                  "https://github.com/LokeshKumar-Dev?tab=repositories",
                  "_blank"
                )
              }
              name="github"
              className="nav__link-icon"
            />
            <Icon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/lokeshmkumar/",
                  "_blank"
                )
              }
              name="linkedin"
              className="nav__link-icon"
            />
          </div>
          <div>
            <Link
              className="navigation__body-link "
              to="Projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              style={{ color: "inherit" }}
            >
              <button className="btn bg-w ft-b mr-10">Projects</button>
            </Link>
            <Link
              className="navigation__body-link "
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              style={{ color: "inherit" }}
            >
              <button className="btn bg-w ft-b">Contact Me</button>
            </Link>
          </div>
        </div>
        <div className="hero-2">
          {!close ? (
            <div className={"card--window bg-w " + (zoom ? "tr-sc-2" : "")}>
              <div className="card--w-header">
                <li
                  className="header-btn cr-p"
                  onClick={() => setClose((x) => !x)}
                  style={{ backgroundColor: "red" }}
                ></li>
                <li
                  className="header-btn cr-p"
                  onClick={() => setZoom((x) => !x)}
                  style={{ backgroundColor: "#ffcb00" }}
                ></li>
                <li
                  className="header-btn"
                  style={{ backgroundColor: "#10cc10" }}
                ></li>
              </div>
              <div className="card--w-body">
                <div className="card-img">
                  <img className="card-img-i" src="./p.jpg" />
                </div>
                <div>
                  <h4 className="card-title">Lokesh Kumar M</h4>
                  <h6 className="card-subTitle">CS Student @ JPR Chennai</h6>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        {/* <button className="btn bg-w ft-b">About</button>
        <div className="card--window">
          <div className="card--w-header">
            <li className="header-btn" style={{backgroundColor: "red"}}></li>
            <li className="header-btn" style={{backgroundColor: "#ffcb00"}}></li>
            <li className="header-btn" style={{backgroundColor: "#10cc10"}}></li>
          </div>
          <div className="card--w-body"></div>
        </div> */}
      </section>
    </>
  );
}
