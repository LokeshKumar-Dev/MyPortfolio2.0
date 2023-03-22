import React from "react";
import { Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-d container">
        <h2 className="nav__logo ft-b">
          Lokesh
          <li
            className="header-btn"
            style={{
              backgroundColor: "red",
              height: "7px",
              width: "7px",
              margin: "0 6px",
            }}
          ></li>
          Kumara
        </h2>
        <div className="footer-">
          <h6>
            Designed by Avi Vashishta and
            <br /> Developed by LokeshKumar [ME] © 2023
          </h6>
          <div className="hero-1-links">
            <Icon
              onClick={() =>
                window.open(
                  "https://www.instagram.com/__lokeshkumar.m__/",
                  "_blank"
                )
              }
              name="instagram"
              className="nav__link-icon"
            />
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
            <Icon
              onClick={() =>
                window.open(
                  "mailto: m.a.lokeshkumar@gmail.com",
                  "_blank"
                )
              }
              name="google"
              className="nav__link-icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
