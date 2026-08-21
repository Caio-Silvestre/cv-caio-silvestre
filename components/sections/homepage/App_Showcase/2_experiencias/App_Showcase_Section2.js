import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../../../../../hooks/useIsLessThan999px";
import Mobile from "./Mobile";
import { topics } from "./topics";

export default function App_Showcase_Section2() {
  const [visibleTopic, setVisibleTopic] = useState(4);
  const [stopAnimation, setStopAnimation] = useState(false);
  const mid = Math.ceil(topics.length / 2);

  const isMobile = useIsMobile();
  const BgVideo = () => {
    const videoRef = useRef(null);
    useEffect(() => {
      videoRef.current.playbackRate = 0.5;
    }, []);
    const handleVideoEnded = () => {
      videoRef.current.currentTime = videoRef.current.duration;
      videoRef.current.playbackRate = -1;
      videoRef.current.play();
    };
    return (
      <video
        ref={videoRef}
        className="detail_video"
        src={"/assets/videos/teste22.mp4"}
        autoPlay
        loop
        muted
        onEnded={handleVideoEnded}
      />
    );
  };

  useEffect(() => {
    if (!isMobile) {
      console.log("🐉");

      const interval = setInterval(() => {
        if (!stopAnimation) {
          setVisibleTopic((prev) =>
            prev === topics.length - 1 ? 0 : (prev || 0) + 1
          );
        }
      }, 4000); // Mostra um texto a cada 3 segundos
      return () => clearInterval(interval);
    }
  }, [stopAnimation, isMobile]);

  const LessThan999px = () => {
    return <Mobile />;
  };

  return (
    <>
      <section className="section spdt two_circle">
        <div className="container">
          <div className="heading align-center wow animate__animated animate__fadeInDown">
            <h2 className="heading-title size-l">
              Experiências com tecnologias.
            </h2>
            <div className="heading-sub color-navy mt-2">
              {isMobile ? (
                <>
                  <b className="text-enfase"> Clique nos ícones </b> para saber
                  mais.
                </>
              ) : (
                <>
                  Descanse o <b className="text-enfase"> mouse nos ícones </b>{" "}
                  para saber mais.
                </>
              )}
            </div>
          </div>
          {!isMobile ? (
            <>
              {/* <BgVideo/> */}

              <div className="row flex-align-c">
                <div
                  className="col-lg-3 wow animate__animated animate__fadeInLeft"
                  style={{ height: "33rem" }}
                >
                  <div
                    className="block-icon-box layout-05"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "5em",
                    }}
                  >
                    {topics.map((topic, index) =>
                      index >= mid ? (
                        <div
                          key={index}
                          className={`animate__animated animate__fadeInRigth icon-box topic ${topic.className} `}
                          onMouseEnter={() => (
                            setStopAnimation(true), setVisibleTopic(index)
                          )}
                          onMouseLeave={() => (
                            setStopAnimation(false), setVisibleTopic(null)
                          )}
                        >
                          <div className="inner innerRigth">
                            <div className="icon">
                              <i class={topic.icon} />
                            </div>
                            <div className="content contentRigth">
                              <h3 className="title">{topic.text}</h3>
                              <div
                                className={`dropdowntext dropdowntextLeft ${
                                  visibleTopic === index ? "visible" : ""
                                }`}
                              >
                                {topic.subtext}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )
                    )}
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="images layout-02 lg-mt60 lg-mb60">
                    <div className="inner">
                      <img
                        className=" wow animate__animated animate__fadeInUp boiandoAnimacao2"
                        src="/assets/images/astronauta.png"
                        alt="Image"
                        style={{
                          marginBottom: "5rem",
                          width: "60%",
                          height: "auto",
                          marginBottom: "10%",
                        }}
                      />
                      {/* <img
                                        className="img02 wow animate__animated      animate__fadeInLeft"
                                        src="/assets/images/asc4.png"
                                        alt="Image"
                                    />
                                    <img
                                        className="img03 wow animate__animated      animate__fadeInRight"
                                        src="/assets/images/asc5.png"
                                        alt="Image"
                                    />  <img
                                        className="img04 lg-hidden"
                                        src="/assets/images/asc6.png"
                                        alt="Image"
                                    /> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3  wow animate__animated animate__fadeInRight"
                  style={{ height: "33rem" }}
                >
                  <div
                    className="block-icon-box layout-05"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "5em",
                    }}
                  >
                    {topics.map((topic, index) =>
                      index < mid ? (
                        <div
                          key={index}
                          className={`animate__animated animate__fadeInRigth icon-box topic ${topic.className} `}
                          style={{ cursor: "pointer" }} // Adiciona o cursor na div externa
                          onMouseEnter={() => (
                            setVisibleTopic(index), setStopAnimation(true)
                          )}
                          onMouseLeave={() => (
                            setVisibleTopic(null), setStopAnimation(false)
                          )}
                        >
                          <div className="inner">
                            <div className="icon">
                              <i class={topic.icon} />
                            </div>
                            <div className="content">
                              <h3 className="title">{topic.text}</h3>
                              <div
                                className={`dropdowntext dropdowntextRight ${
                                  visibleTopic === index ? "visible" : ""
                                }`}
                              >
                                {topic.subtext}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <LessThan999px />
          )}
        </div>
      </section>
    </>
  );
}
