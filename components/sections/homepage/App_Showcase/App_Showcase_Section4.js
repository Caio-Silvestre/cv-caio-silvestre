export default function App_Showcase_Section4() {
  return (
    <>
      <section className="section pt120 spdb">
        <div className="container">
          <img
            className="wow animate__animated animate__fadeInRight boiandoAnimacao"
            src="/assets/images/planetPurple.png"
            alt="Image"
            style={{
              width: "30%",
              height: "auto",
              position: "absolute",
              right: "0.1em",
              zIndex: "-100",
            }}
          />
          <div className="heading align-center wow animate__animated animate__fadeInDown">
            <div className="heading-sub color-navy">Os três pilares</div>
            <h2 className="heading-title size-l">BUSCAMOS SEMPRE </h2>
          </div>
          <div className="block-icon-box align-center">
            <div className="row flex-align-c">
              <div className="col-lg-4 wow animate__animated animate__fadeInLeft">
                <div className="icon-box">
                  <div className="inner">
                    <div className="number">
                      <i class="las la-brain" />
                    </div>
                    <div className="content">
                      <h3 className="title">Criar</h3>
                      <div className="desc">
                        Compreender o problema, identificar a necessidade e
                        desenvolver a melhor solução para resolvê-la
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  wow animate__animated animate__fadeInUp">
                <div className="icon-box">
                  <div className="inner">
                    <div className="number">
                      <i class="las la-map" />
                    </div>
                    <div className="content">
                      <h3 className="title">Planejar</h3>
                      <div className="desc">
                        Elaborar estratégias para garantir a execução eficiente,
                        antecipando e considerando os desafios do caminho.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  wow animate__animated animate__fadeInRight">
                <div className="icon-box">
                  <div className="inner">
                    <div className="number">
                      <i class="las la-rocket" />
                    </div>
                    <div className="content">
                      <h3 className="title">Codar</h3>
                      <div className="desc">
                        Implementar a solução de forma eficaz, seguindo o
                        planejamento e garantindo a qualidade do código.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="wow animate__animated animate__fadeInLeft"
                src="/assets/images/cubesSvg.svg"
                alt="Image"
                style={{
                  width: "40%",
                  height: "auto",
                  position: "absolute",
                  top: "",
                  left: "-10rem",
                  zIndex: "-100",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
