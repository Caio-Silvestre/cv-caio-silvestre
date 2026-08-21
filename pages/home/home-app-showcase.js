import Layout from "@/components/layout/Layout";
import App_Showcase_Section1 from "@/components/sections/homepage/App_Showcase/1_apresentacao/App_Showcase_Section1";
import App_Showcase_Section10 from "@/components/sections/homepage/App_Showcase/5_contato/App_Showcase_Section10";
import App_Showcase_Section2 from "@/components/sections/homepage/App_Showcase/2_experiencias/App_Showcase_Section2";
import App_Showcase_Section3 from "@/components/sections/homepage/App_Showcase/3_frase_motivacional/App_Showcase_Section3";
import App_Showcase_Section4 from "@/components/sections/homepage/App_Showcase/App_Showcase_Section4";

import { useCallback, useEffect, useRef, useState } from "react";

const WELCOME_EXIT_MS = 900;

export default function HomeAppShowcase() {
  const [bgOn, setBgOn] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const videoRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, [bgOn]);

  const handleEnter = useCallback(() => {
    if (!bgOn || leaving) return;

    setLeaving(true);
    videoRef.current?.classList.add("welcomevideoOut");
    titleRef.current?.classList.add("welcometextOut");

    window.setTimeout(() => {
      setBgOn(false);
      setLeaving(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, WELCOME_EXIT_MS);
  }, [bgOn, leaving]);

  if (bgOn) {
    return (
      <div className="welcome-overlay" aria-label="Tela de boas-vindas">
        <h1
          ref={titleRef}
          className="welcometext welcometext_h1"
          onClick={handleEnter}
        >
          Bem vindo.
          <small>clique para entrar.</small>
        </h1>
        <video
          ref={videoRef}
          className="welcomevideo"
          src="/assets/videos/videoBgPurple.webm"
          onClick={handleEnter}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
    );
  }

  return (
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
  );
}
