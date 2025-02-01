import { useEffect, useRef, useState } from "react";

export default function App_Showcase_Section2() {
  const [visibleTopic, setVisibleTopic] = useState(4);
  const [stopAnimation, setStopAnimation] = useState(false);
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
  const topics = [
    {
      id: 1,
      icon: "lab la-react",
      text: "React.jsx",
      subtext:
        "Experiência com interfaces dinâmicas e responsivas,  sistemas ERP, atualização de pacotes, manutenção de aplicações e integração com sistemas omnichannel.",
      className: "react",
    },
    {
      id: 2,
      icon: "las la-database",
      text: "SQL",
      subtext:
        "Criação e otimização de queries para features novas, resolução de inconsistências em dados e manutenção de integridade em bases relacionais.",
      className: "sql",
    },
    {
      id: 3,
      icon: "lab la-css3",
      text: "CSS",
      subtext:
        "Experiência com animações, design responsivo e adaptação de layouts; resolução de bugs complexos e uso avançado de pré-processadores como SASS.",
      className: "css",
    },
    {
      id: 4,
      icon: "lab la-laravel",
      text: "PHP Laravel",
      subtext:
        "Desenvolvimento de APIs RESTful robustas, implementação de comandos personalizados, manutenção de sistemas legados e criação de novas funcionalidades.",
      className: "laravel",
    },
    {
      id: 5,
      icon: "las la-code-branch",
      text: "Metodologias Ágeis",
      subtext:
        "Experiência com Scrum e Kanban; gestão de tarefas usando Jira e Notion; integração com GitHub, padronização de commits e entregas contínuas.",
      className: "scrum",
    },
    {
      id: 6,
      icon: "lab la-node-js",
      text: "Node.js",
      subtext:
        "Desenvolvimento de APIs RESTful com Express.js, criação de endpoints para operações CRUD e integração com sistemas de terceiros.",
      className: "nodejs",
    },
    {
      id: 7,
      icon: "lab la-github",
      text: "GitHub",
      subtext:
        "Gerenciamento de branches para organização de funcionalidades; revisão e criação de pull requests; solução de conflitos de merge e automação com GitHub Actions.",
      className: "github",
    },
    {
      id: 7,
      icon: "lab la-npm",
      text: "NPM",
      subtext:
        "Experiência na resolução de conflitos de pacotes, atualização de versões em projetos legados e preparação de builds para deploy.",
      className: "npm",
    },
  ];

  // Alterna automaticamente os textos em intervalos de tempo
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!stopAnimation) {
  //       setVisibleTopic((prev) =>
  //         prev === topics.length - 1 ? 0 : (prev || 0) + 1
  //       );
  //     }
  //   }, 4000); // Mostra um texto a cada 3 segundos
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <section className="section spdt two_circle">
        <div className="container">
          {/* <BgVideo/> */}
          <div className="heading align-center wow animate__animated animate__fadeInDown">
            <h2 className="heading-title size-l">
              Experiências com tecnologias.
            </h2>
            <div className="heading-sub color-navy mt-2">
              Descanse o <b className="text-enfase"> mouse nos ícones </b> para
              saber mais.
            </div>
          </div>
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
                  index > 3 ? (
                    <div
                      key={index}
                      className={`animate__animated animate__fadeInRigth icon-box topic ${topic.className} `}
                      onMouseEnter={() => (
                        setStopAnimation(true), setVisibleTopic(index)
                      )}
                      onMouseLeave={() => (
                        setStopAnimation(true), setVisibleTopic(null)
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
              {/* <div
                className="block-icon-box layout-05 "
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "5em",
                }}
              >
                <div className="icon-box">
                  <div className="inner">
                    <div className="icon">
                      <i className="las la-laptop-code" />
                    </div>
                    <div className="content">
                      <h3 className="title">Soluções técnológicas</h3>
                      <div className="desc">
                        A escolha das tecnologias é feita levando em
                        consideração a situação.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="inner">
                    <div className="icon">
                      <i className="las la-umbrella" />
                    </div>
                    <div className="content">
                      <h3 className="title">Qualquer departamento</h3>
                      <div className="desc">
                        Estamos prontos para atender a qualquer departamento,
                        adaptando-nos e conhecendo a fundo a sua área.
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
                  index <= 3 ? (
                    <div
                      key={index}
                      className={`animate__animated animate__fadeInRigth icon-box topic ${topic.className} `}
                      style={{ cursor: "pointer" }} // Adiciona o cursor na div externa
                      onMouseEnter={() => (
                        setVisibleTopic(index), setStopAnimation(true)
                      )}
                      onMouseLeave={() => (
                        setVisibleTopic(null), setStopAnimation(true)
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
          {/* <div className="topics-container">
            {topics.map((topic, index) => (
              <>
                <div
                  key={topic.id}
                  className={`icon-box topic ${topic.className}`}
                  onMouseEnter={() => setVisibleTopic(index)}
                  onMouseLeave={() => setVisibleTopic(null)}
                >
                  <div className="inner">
                    <div className="icon">
                      <i class="lab la-react"></i>
                    </div>
                    <div className="content">
                      <h3
                        className={`title text ${
                          visibleTopic === index ? "visible" : ""
                        }`}
                      >
                        {topic.text}
                      </h3>
                      
                      <div
                        className={`dropdowntext ${
                          visibleTopic === index ? "visible" : ""
                        }`}
                      >
                        {topic.subtext}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
