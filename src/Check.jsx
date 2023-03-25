import React from "react";

class Check extends React.Component {
  constructor() {
    super();
    this.state = {
      c: 0,
      title: "sfas",
    };
  }
  inc = () => {
    // for (let i = 0; i < 100; i++) {
    //   if (i % 2 === 0) {
    //     console.log("for");
    //     await this.setState({ c: this.state.c + 1 });
    //   }
    // }
    this.setState((s) => {
      return { ...s, c: s.c + 1 };
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  render() {
    // console.log("render");
    return (
      <>
        <h2 onMouseOver={this.inc}>Click</h2>
        <h1>Count = {this.state.c || "Click To Move"}</h1>
      </>
    );
  }
}

export default Check;
