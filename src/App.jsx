import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import { Icon, Button } from "semantic-ui-react";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
    </>
  );
}
