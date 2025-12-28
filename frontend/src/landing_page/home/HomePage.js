import React from "react";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Education from "./Education";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
