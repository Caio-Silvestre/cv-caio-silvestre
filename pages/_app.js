import "../public/assets/libs/bootstrap/css/bootstrap.min.css";
import "../public/assets/libs/line-awesome/css/line-awesome.min.css";
import "../public/assets/scss/section/_team.scss";
// import '../public/assets/libs/swiper/swiper-bundle.min.css'

import "animate.css";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../public/assets/css/style.css";
import "../components/sections/homepage/App_Showcase/2_experiencias/styleSection2.scss";
import "../components/sections/homepage/App_Showcase/1_apresentacao/styleSection1.scss";
import "../components/sections/homepage/App_Showcase/5_contato/styleContato.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WELCOME_VIDEO_SRC = "/assets/videos/videoBgPurple.webm";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let finished = false;
    let videoReady = false;
    let minElapsed = false;

    const tryFinish = () => {
      if (finished || !videoReady || !minElapsed) return;
      finished = true;
      setLoading(false);
    };

    // Pré-carrega o vídeo de boas-vindas durante o loader
    // para ele já estar pronto quando a tela de welcome montar.
    const video = document.createElement("video");
    video.muted = true;
    video.preload = "auto";
    video.playsInline = true;
    video.src = WELCOME_VIDEO_SRC;
    video.load();

    const onReady = () => {
      videoReady = true;
      tryFinish();
    };
    video.addEventListener("canplaythrough", onReady, { once: true });
    video.addEventListener("error", onReady, { once: true });

    // Tempo mínimo do loader
    const minWait = window.setTimeout(() => {
      minElapsed = true;
      tryFinish();
    }, 800);

    // Fallback se o vídeo demorar demais
    const maxWait = window.setTimeout(() => {
      videoReady = true;
      minElapsed = true;
      tryFinish();
    }, 2500);

    return () => {
      window.clearTimeout(maxWait);
      window.clearTimeout(minWait);
      video.removeEventListener("canplaythrough", onReady);
      video.removeEventListener("error", onReady);
    };
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <ToastContainer position="top-center" theme="colored" />
          <Component {...pageProps} />
        </>
      ) : (
        <div className="loaderContent">
          <div className="card">
            <img
              src="/assets/images/astronautLoader.png"
              alt=""
              className="image"
            />
            <div className="loading-container">
              <span className="loading-text">C</span>
              <span className="loading-text">a</span>
              <span className="loading-text">r</span>
              <span className="loading-text">r</span>
              <span className="loading-text">e</span>
              <span className="loading-text">g</span>
              <span className="loading-text">a</span>
              <span className="loading-text">n</span>
              <span className="loading-text">d</span>
              <span className="loading-text">o</span>
              <span className="loading-text">.</span>
              <span className="loading-text">.</span>
              <span className="loading-text">.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
