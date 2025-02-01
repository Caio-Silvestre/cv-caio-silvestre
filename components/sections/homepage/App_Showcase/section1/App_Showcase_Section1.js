// import './style.css'
import { useEffect, useRef } from "react";

export default function App_Showcase_Section1() {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.playbackRate = 1;
  }, []);
  const handleVideoEnded = () => {
    videoRef.current.currentTime = videoRef.current.duration;
    videoRef.current.playbackRate = -1;
    videoRef.current.play();
  };
  // useEffect(()=> {videoRef.current.playbackRate = 0.5},[])
  return (
    <>
      <section
        className="section background-overlay background-full pdt180 oveflow-hidden"
        // style={{ backgroundImage: "url(/assets/images/hero-01.jpg)" }}
      >
        <video
          ref={videoRef}
          className="bg_video"
          src={"/assets/videos/videoBgPurple.webm"}
          autoPlay
          loop
          muted
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading heading-alway-white wow animate__animated animate__fadeInLeft ">
                <div className="heading-sub">Muito prazer,</div>
                <h2 className="heading-title size-xl">
                  Caio Silvestre.
                  <br />
                </h2>
                <div
                  className="heading-desc"
                  data-wow
                  animate__animated-delay="1.7s"
                >
                  Desenvolvedor Front-End com sólida experiência em React.js e
                  formação Full-Stack, permitindo uma atuação versátil em
                  demandas de Back-End. Atualmente, colabora no desenvolvimento
                  de soluções integradas utilizando React.js no Front-End, PHP
                  com Laravel no Back-End e SQL para gerenciamento de dados.
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="images align-right layout-01 lg-mt32">
                <div className="align-center">
                  <div
                    className="inner"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="avatar-inner">
                      <div class="avatar-container">
                        {/* <div class="effetcPhoto">
                      <div class="effetcPhoto1"> */}
                        <img
                          src="/assets/images/caioPhoto.png"
                          alt="Member"
                          autoPlay
                          loop
                          muted
                          className="avatar-caio"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <img
                                    className="img01 wow animate__animated animate__fadeInUp "
                                    data-wow animate__animated-delay="0.5s"
                                    src="/assets/images/purpleEnergyCircle.png"
                                    alt="Image"
                                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
