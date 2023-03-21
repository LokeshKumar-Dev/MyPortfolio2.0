import React from "react";
import Board from "./Board";

export default function Skills() {
  const [close, setClose] = React.useState(false);
  const clearBtn = React.useRef("");

  return (
    <>
      <section className="about container">
        <h2 className="about-title">
          Skills
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
        <div className="skills">
          {!close ? (
            <div className={"card--window-board "}>
              <div
                className="card--w-header"
                style={{ background: "#373737", height: "10%" }}
              >
                <li
                  className="header-btn cr-p"
                  onClick={() => setClose((x) => !x)}
                  style={{ backgroundColor: "red" }}
                ></li>
                <li
                  className="header-btn"
                  style={{ backgroundColor: "#ffcb00" }}
                ></li>
                <li
                  className="header-btn"
                  style={{ backgroundColor: "#10cc10" }}
                ></li>
                <button id="clear-btn" ref={clearBtn}>
                  Clear
                </button>
              </div>
              <div
                className="card--w-board-body cr-pen"
                style={{ padding: "1px!important" }}
                // onClick={() =>
                //   window.open(
                //     "https://www.instagram.com/__lokeshkumar.m__/",
                //     "_blank"
                //   )
                // }
              >
                <Board color={"#FF5733"} size={"2"} btn={clearBtn} />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
