import React from "react";
import Header from "../components/Header.jsx";
import AboutSec from "../components/About.jsx";
import Family from "../components/Family.jsx";
import Footer from "../components/Footer.jsx";

export default function About() {
  return (
    <div className="root" data-scroll-section>
      <Header />
      <AboutSec />
      <Family />
      <Footer />
    </div>
  );
}
