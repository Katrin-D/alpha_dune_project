import React, { useRef, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRouter } from "next/router";
import "locomotive-scroll/src/locomotive-scroll.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);
  const { asPath } = useRouter();

  /*if (typeof window !== "undefined") {
        install();
      }*/
  /*if (!window.ResizeObserver) install();*/

  useEffect(() => {
    setTimeout(() => {
      const scrollbar = document.querySelector(".c-scrollbar");
      scrollbar?.remove();
    }, 2000);
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: { smooth: true, disableLerp: true },
        smartphone: { smooth: true, disableLerp: true },
      }}
      watch={[asPath]}
      containerRef={containerRef}
      location={asPath}
      onLocationChange={(scroll) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      onUpdate={() => console.log("Updated, but not on location change!")} // Will trigger on
    >
      <main data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
