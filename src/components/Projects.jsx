import React from "react";
import { Icon } from "semantic-ui-react";

export default function Projects() {
  const [pro1, setPro1] = React.useState(false);
  const [pro2, setPro2] = React.useState(false);
  const [pro3, setPro3] = React.useState(false);

  return (
    <>
      <section id="Projects" className="about container">
        <h2 className="about-title">
          Projects
          <li
            className="header-btn"
            style={{
              backgroundColor: "red",
              height: "7px",
              width: "7px",
              margin: "0 6px",
            }}
          ></li>
        </h2>
        <div className="projects cr-p ft-w">
          <div
            className="pro project-1"
            onMouseEnter={() => setPro1(true)}
            onMouseLeave={() => setPro1(false)}
            onClick={() =>
              window.open("https://superb-druid-5089a8.netlify.app/", "_blank")
            }
          >
            <h3 className="pro-title ft-u lh-55">
              Super
              <br />
              Service
            </h3>
            <div className="pro-box">
              <div className={"pro-description " + (!pro1 ? "op-1" : "op-0")}>
                <ul>
                  <li>ServiceApp</li>
                  <li>ReactJs</li>
                  <li>Redux</li>
                  <li>Axios</li>
                  <li>Paypal</li>
                  <li>Responsive</li>
                </ul>
              </div>
              <p className={"pro-description tr-d " + (pro1 ? "op-1" : "op-0")}>
                {pro1 === true ? (
                  <>
                    It allows users to access a range of features and tools
                    through their web browser, including customer management,
                    scheduling, invoicing and customer relationship management
                    (CRM).
                  </>
                ) : (
                  ""
                )}
              </p>
            </div>
            <button
              className={"pro-btn cr-p " + (pro1 ? "bg-1" : "")}
              onClick={() =>
                window.open(
                  "https://github.com/LokeshKumar-Dev/superservice",
                  "_blank"
                )
              }
            >
              {pro1 ? (
                <Icon
                  onClick={() => {}}
                  name="github pro-i"
                  style={{ fontSize: "1.2rem", marginRight: "1rem" }}
                />
              ) : null}
              <Icon onClick={() => {}} name="arrow right pro-i" />
            </button>
          </div>
          <div
            className="pro project-2"
            onMouseEnter={() => setPro2(true)}
            onMouseLeave={() => setPro2(false)}
            onClick={() =>
              window.open(
                "https://lokeshkumar-dev.github.io/Musify/",
                "_blank"
              )
            }
          >
            {/* <div className="wrapper">
              <div className="marquee"> */}
            <h3 className="pro-title ft-u lh-55">Musify</h3>
            {/* </div>
            </div> */}
            <div className="pro-box">
              <div className={"pro-description " + (!pro2 ? "op-1" : "op-0")}>
                <ul>
                  <li>MusicApp</li>
                  <li>ReactJs</li>
                  <li>React Hooks</li>
                  <li>Node/Express Js</li>
                  <li>Axios</li>
                  <li>MySql</li>
                </ul>
              </div>
              <p className={"pro-description tr-d " + (pro2 ? "op-1" : "op-0")}>
                {pro2 === true ? (
                  <>
                    Musify allows users to live stream music, audio content on
                    demand from a library.It is an Web App which recreated as
                    spotify.
                  </>
                ) : (
                  ""
                )}
              </p>
            </div>
            <button
              className={"pro-btn cr-p " + (pro2 ? "bg-1" : "")}
              onClick={() =>
                window.open(
                  "https://github.com/LokeshKumar-Dev/Musify",
                  "_blank"
                )
              }
            >
              {pro2 ? (
                <Icon
                  onClick={() => {}}
                  name="github pro-i"
                  style={{ fontSize: "1.2rem", marginRight: "1rem" }}
                />
              ) : null}
              <Icon onClick={() => {}} name="arrow right pro-i" />
            </button>
          </div>
          <div
            className="pro project-3"
            onMouseEnter={() => setPro3(true)}
            onMouseLeave={() => setPro3(false)}
            onClick={() =>
              window.open(
                "https://shiny-alfajores-355e55.netlify.app/",
                "_blank"
              )
            }
          >
            <h3 className="pro-title ft-u lh-55">
              Super
              <br />
              Dash
            </h3>
            <div className="pro-box">
              <div className={"pro-description " + (!pro3 ? "op-1" : "op-0")}>
                <ul>
                  <li>Dashboard</li>
                  <li>ReactJs</li>
                  <li>Redux</li>
                  <li>Node/Express Js</li>
                  <li>Mongoose</li>
                  <li>Axios/Api</li>
                </ul>
              </div>
              <p className={"pro-description tr-d " + (pro3 ? "op-1" : "op-0")}>
                {pro3 === true ? (
                  <>
                    This helps businesses be better manage their services and
                    connect with customers online and mainly it uses to provide
                    service by seller and admin.
                  </>
                ) : (
                  ""
                )}
              </p>
            </div>
            <button
              className={"pro-btn cr-p " + (pro3 ? "bg-1" : "")}
              onClick={() =>
                window.open(
                  "https://github.com/LokeshKumar-Dev/SuperDash",
                  "_blank"
                )
              }
            >
              {pro3 ? (
                <Icon
                  name="github pro-i"
                  style={{ fontSize: "1.2rem", marginRight: "1rem" }}
                />
              ) : null}
              <Icon onClick={() => {}} name="arrow right pro-i" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
