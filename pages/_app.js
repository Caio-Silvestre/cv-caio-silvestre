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
import "../components/sections/homepage/App_Showcase/section2/styleSection2.scss";
import "../components/sections/homepage/App_Showcase/section1/styleSection1.scss";
import "../components/sections/homepage/App_Showcase/contato/styleContato.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpinnerPiramide from "@/components/elements/spinner";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {!loading ? (
        <>
          <ToastContainer position="top-center" theme="colored" />
          <Component {...pageProps} />
        </>
      ) : (
        <div class="loaderContent">
          <div class="card">
            <img
              src="/assets/images/astronautLoader.png"
              alt=""
              class="image"
            />
            {/* <SpinnerPiramide /> */}
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
            {/* <small>Carregando...</small> */}
          </div>
        </div>
      )}
    </>
  );
}
