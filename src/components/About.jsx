import React, { useState } from "react";

export default function About() {
  const [zoom, setZoom] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <>
      <section className="about container">
        <h2 className="about-title">
          About Me
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
        <div className="about-">
          <div className="about-1">
            <p className="about-1--para">
              Hi! ,As I said before " Am LOKESH KUMAR " a CS student at JPR
              college who loves " Photography📷 ", " Travel✈ ", " Coding ".
              <br style={{ marginBottom: "10px" }} /> A self taught Web
              Developer Knows ReactJs, NodeJs, Flutter, Redux, ExpressJs,
              Mongoose to do awesome🤩 things in " easy and effective way " for
              nice people. So you can Beleive in me to do things in " simpler
              and classy😎 way ".
            </p>
            {!close ? (
              <div
                className={
                  "card--window bg-w card--qr cr-p " + (zoom ? "tr-sc-1-2" : "")
                }
              >
                {/* + (zoom ? "tr-sc-2" : "") */}
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
                <div
                  className="card--w-body"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/__lokeshkumar.m__/",
                      "_blank"
                    )
                  }
                >
                  <div className="card-img">
                    <img className="card-img-qr" src="./qr.png" />
                  </div>
                  <div>
                    <h4 className="card-title" style={{ fontSize: "1.5rem" }}>
                      @__LOKESHKUMAR.M__
                    </h4>
                    <p style={{textAlign: "center"}}>Click or Scan to access my insta page</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="about-2">
            <img src="./insta-min.gif" className="about-2-gif" />
          </div>
        </div>
      </section>
    </>
  );
}
