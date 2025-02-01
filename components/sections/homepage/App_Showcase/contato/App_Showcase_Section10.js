import { useEffect, useRef } from "react";
import EnvioDeEmail from "./formEmail";
import { Linkedin, ZapZap } from "./iconscontatos";

export default function App_Showcase_Section10() {
  return (
    <>
      <section className="section-team section has-icon icon-bottom-left spdtb pt-5">
        <div className="animate__animated animate__fadeInDown">
          <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
            <h2 className="heading-title size-l">Entre em contato</h2>
            <div className="w-100 d-flex align-items-center justify-content-center">
              <div className="w-50 pdl100">
                <EnvioDeEmail className="pdl100 pdr100" />
              </div>
              <div
                className="w-50 h-100 d-flex justify-content-end "
                style={{ minHeight: "25rem" }}
              >
                <div className="w-25 h-99 d-flex flex-column align-items-center justify-content-around ">
                  <ZapZap />
                  <Linkedin />
                </div>

                <div className=" content-btns">
                  <button
                    className="button-cs"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/assets/docs/cv_caio_silvestre.pdf";
                      link.download = "cv_caio_silvestre.pdf";

                      document.body.appendChild(link);
                      link.click();

                      document.body.removeChild(link);
                    }}
                  >
                    Baixar CV
                  </button>

                  <button
                    className="button-cs"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/assets/docs/cv_caio_silvestre.pdf";
                      link.target = "_blank";

                      document.body.appendChild(link);
                      link.click();

                      document.body.removeChild(link);
                    }}
                  >
                    Abrir CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="icon" src="/assets/images/asc6.png" alt="Image" /> */}
      </section>
    </>
  );
}
