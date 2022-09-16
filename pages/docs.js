import React from "react";
import Header from "../components/Header.jsx";
import DocsSec from "../components/Docs.jsx";
import Footer from "../components/Footer.jsx";

export default function Docs() {
  return (
    <div
      className="root"
      data-scroll-section
      style={{
        background: "linear-gradient(180deg, #0B1C2E 0%, #031324 11.65%);",
      }}
    >
      <Header />
      <DocsSec />
      <Footer />
    </div>
  );
}
