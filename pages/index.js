import React from "react";
import Head from "next/head";
import Header from "../components/Header.jsx";
import Intro from "../components/Intro.jsx";
import Discover from "../components/Discover.jsx";
import Ecosystem from "../components/Ecosystem.jsx";
import Engaging from "../components/Engaging.jsx";
import Family from "../components/Family.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="root" data-scroll-section>
      <Head>
        <title>Alpha Dune</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Alpha Dune is the governance and community hub for our ecosystem"
        />
        <link rel="icon" href="/logo_fav.svg" />
      </Head>
      <Header />
      <Intro />
      <Discover />
      <Ecosystem />
      <Engaging />
      <Family />
      <Footer />
    </div>
  );
}
