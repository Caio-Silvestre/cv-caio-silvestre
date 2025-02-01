import Layout from "@/components/layout/Layout";
import App_Showcase_Section1 from "@/components/sections/homepage/App_Showcase/section1/App_Showcase_Section1";
import App_Showcase_Section10 from "@/components/sections/homepage/App_Showcase/contato/App_Showcase_Section10";
import App_Showcase_Section2 from "@/components/sections/homepage/App_Showcase/section2/App_Showcase_Section2";
import App_Showcase_Section3 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section3";
import App_Showcase_Section4 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section4";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function HomeAppShowcase() {
  const [bgOn, setBgOn] = useState(true);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const welcomeAnimation = useCallback(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    videoRef.current.playbackRate = 1;
    const ref = videoRef.current.className;
    console.log(ref);
  }, []);

  const Welcome = () => {
    return (
      <>
        {/* <Link href={'/home'}> */}
        <div style={{ width: "100%", height: "100%" }}>
          <h1
            ref={titleRef}
            className={`welcometext welcometext_h1`}
            onClick={() => {
              videoRef.current.classList.add("welcomevideoOut");
              titleRef.current.classList.add("welcometextOut");
              welcomeAnimation();
            }}
          >
            {" "}
            Bem-vindo.
            <small>clique para entrar.</small>
          </h1>
        </div>
        <video
          onClick={() => {
            welcomeAnimation();
          }}
          ref={videoRef}
          className={`welcomevideo `}
          src={"/assets/videos/videoBgPurple.webm"}
          autoPlay
          loop
          muted
        />
        {/* </Link> */}
      </>
    );
  };
  return (
    <>
      {bgOn ? <Welcome /> : null}
      <Layout
        headerClass="is-transparent sala-dark-scheme"
        siteContentClass="pt0"
      >
        <App_Showcase_Section1 />
        <App_Showcase_Section2 />
        <App_Showcase_Section3 />
        <App_Showcase_Section4 />
        <App_Showcase_Section10 />
      </Layout>
    </>
  );
}
