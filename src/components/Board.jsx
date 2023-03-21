import React from "react";

import "../css/board.css";

class Board extends React.Component {
  timeout;
  ctx;
  isDrawing = false;

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.drawOnCanvas();
  }

  componentWillReceiveProps(newProps) {
    this.ctx.strokeStyle = newProps.color;
    this.ctx.lineWidth = newProps.size;
  }

  drawOnCanvas() {
    var canvas = document.querySelector("#board");
    var clearBtn = this.props.btn.current;
    this.ctx = canvas.getContext("2d");
    var ctx = this.ctx;

    var sketch = document.querySelector("#sketch");
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue("width"));
    canvas.height = parseInt(sketch_style.getPropertyValue("height"));

    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    clearBtn.onclick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "20px cursive";
      ctx.fillStyle = "white";
      ctx.fillText("○ ReactJs/Redux,", 0, 30);
      ctx.fillText("○ NodeJs/ExpressJs/SocketIO,", 0, 75);
      ctx.fillText("○ Mongoose/MySql/Firebase,", 0, 120);
      ctx.fillText("○ Figma/Wix/Flutter,", 0, 165);
      ctx.fillText("○ Python,Javascript,C", 0, 210);
    };

    /* Mouse Capturing Work */
    canvas.addEventListener(
      "mousemove",
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      },
      false
    );

    /* Drawing on Paint App */
    ctx.lineWidth = this.props.size;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = this.props.color;
    if (canvas.width < 350) {
      ctx.font = "15px cursive";
    } else if (canvas.width < 200) {
      ctx.font = "12px cursive";
    } else {
      ctx.font = "20px cursive";
    }
    ctx.fillStyle = "white";
    ctx.fillText("○ ReactJs/Redux,", 0, 30);
    ctx.fillText("○ NodeJs/ExpressJs/SocketIO,", 0, 75);
    ctx.fillText("○ Mongoose/MySql/Firebase,", 0, 120);
    ctx.fillText("○ Figma/Wix/Flutter,", 0, 165);
    ctx.fillText("○ Python,Javascript,C", 0, 210);
    // <h6 className="skills-text">Loki</h6>

    canvas.addEventListener(
      "mousedown",
      function (e) {
        canvas.addEventListener("mousemove", onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      "mouseup",
      function () {
        canvas.removeEventListener("mousemove", onPaint, false);
      },
      false
    );

    var root = this;
    var onPaint = function () {
      ctx.beginPath();
      ctx.moveTo(last_mouse.x, last_mouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();
      ctx.stroke();
    };
  }

  render() {
    return (
      <div class="sketch" id="sketch">
        <canvas className="board" id="board"></canvas>
      </div>
    );
  }
}

export default Board;
