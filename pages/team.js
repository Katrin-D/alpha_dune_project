import React from "react";
import Header from "../components/Header.jsx";
import TeamMembers from "../components/TeamMembers.jsx";
import Family from "../components/Family.jsx";
import Footer from "../components/Footer.jsx";

export default function Team() {
  return (
    <div className="root" data-scroll-section>
      <Header />
      <TeamMembers />
      <Family />
      <Footer />
    </div>
  );
}
