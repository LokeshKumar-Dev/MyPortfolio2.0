import React from "react";
import { Icon } from "semantic-ui-react";

export default function Projects() {
  const [pro1, setPro1] = React.useState(false);
  const [pro2, setPro2] = React.useState(false);
  const [pro3, setPro3] = React.useState(false);

  return (
    <>
      <section className="about container">
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
              window.open(
                "https://www.instagram.com/__lokeshkumar.m__/",
                "_blank"
              )
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
                  <li>ReactJs</li>
                  <li>Node</li>
                  <li>Express</li>
                </ul>
              </div>
              <p className={"pro-description tr-d " + (pro1 ? "op-1" : "op-0")}>
                {pro1 === true ? (
                  <>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Labore sit non totam aut vel vero delectus sunt rerum Veniam
                    vero repellat magnam quam delectus? Blanditiis, nam ut
                    obcaecati dolore officiis consequuntur.
                  </>
                ) : (
                  ""
                )}
              </p>
            </div>
            <button className={"pro-btn cr-p " + (pro1 ? "bg-1" : "")}>
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
                "https://www.instagram.com/__lokeshkumar.m__/",
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
                  <li>ReactJs</li>
                  <li>Node</li>
                  <li>Express</li>
                </ul>
              </div>
              <p className={"pro-description tr-d " + (pro2 ? "op-1" : "op-0")}>
                {pro2 === true ? (
                  <>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Labore sit non totam aut vel vero delectus sunt rerum Veniam
                    vero repellat magnam quam delectus? Blanditiis, nam ut
                    obcaecati dolore officiis consequuntur.
                  </>
                ) : (
                  ""
                )}
              </p>
            </div>
            <button className={"pro-btn cr-p " + (pro2 ? "bg-1" : "")}>
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
          <div className="pro project-3">p3</div>
        </div>
      </section>
    </>
  );
}
