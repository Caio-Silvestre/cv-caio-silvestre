import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  const BgVideo = () => {
    const videoRef = useRef(null);
    useEffect(() => {
      videoRef.current.playbackRate = 0.8;
    }, []);
    const handleVideoEnded = () => {
      videoRef.current.currentTime = videoRef.current.duration;
      videoRef.current.playbackRate = -1;
      videoRef.current.play();
    };
    return (
      <video
        ref={videoRef}
        style={{
          position: "relative",
          zIndex: "-110",
          opacity: "50%",
          bottom: "300px",
        }}
        src={"/assets/videos/galaxyaFinalPurple.webm"}
        autoPlay
        loop
        muted
        onEnded={handleVideoEnded}
      />
    );
  };
  return (
    <>
      <footer id="footer" className="footer" style={{ padding: "0px" }}>
        <div className="footer-top" style={{ padding: "0px" }}>
          <div
            className="container"
            style={{ overflow: "hidden", height: "20vh", padding: "0px" }}
          >
            <div className="inner">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-item footer-about">
                    <div
                      className="logo"
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-between",
                        height: "7em",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          padding: "10px",
                        }}
                      >
                        <h1
                          onClick={() => scrollToTop()}
                          style={{ cursor: "pointer" }}
                        >
                          caioSilvestre.
                        </h1>
                        <div className="copyright">
                          © 2023 Caio Silvestre. All rights reserved
                        </div>
                      </div>
                      {/* <video style={{cursor:'pointer'}}  autoPlay loop onClick={()=> scrollToTop()} src={'/assets/videos/galaxyaFinalPurple.webm'} />  */}
                    </div>
                    {/* <p>
                                            A amazing WordPress theme designed specifically for a startup,
                                            apps, business, SaaS, and IT services.
                                        </p> */}
                  </div>
                </div>
                {/* <div className="col-lg-2">
                                    <div className="footer-item footer-menu">
                                        <h6>Company</h6>
                                        <ul>
                                            <li>
                                                <Link href="/about-company" title="About us">
                                                    About us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-simple-grid" title="Blog">
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/careers" title="Careers">
                                                    Careers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-01" title="Contact">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="footer-item footer-menu">
                                        <h6>Resources</h6>
                                        <ul>
                                            <li>
                                                <Link href="/contact-01" title="Downloads">
                                                    Downloads
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-01" title="Help Center">
                                                    Help Center
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-01" title="Partners">
                                                    Partners
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-01" title="Press Kit">
                                                    Press Kit
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="footer-item footer-menu">
                                        <h6>Social Media</h6>
                                        <ul>
                                            <li>
                                                <Link href="https://www.facebook.com" title="Facebook">
                                                    Facebook
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.twitter.com" title="Twitter">
                                                    Twitter
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com" title="Instagram">
                                                    Instagram
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com" title="Linkedin">
                                                    Linkedin
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-item footer-newsletter">
                                        <h6>Newsletter</h6>
                                        <p>
                                            Subcribe our newsletter and stay up to date about the company
                                        </p>
                                        <form action="#" className="newsletter">
                                            <div className="field-input">
                                                <input
                                                    type="email"
                                                    defaultValue=""
                                                    placeholder="Email address"
                                                />
                                            </div>
                                            <div className="field-submit">
                                                <button>Subcribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
              </div>
            </div>
            {/* <BgVideo/> */}
          </div>
        </div>
        {/* <div className="footer-bottom">
                    <div className="container">
                        <div className="inner flex flex-content-sb flex-align-c">
                            <div className="copyright">© 2023 TechLab. All rights reserved</div>
                            <div className="menu">
                                 <ul>
                                    <li>
                                        <Link href="/privacy-policy" title="Terms">
                                            Terms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy" title="Privacy Policy">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
      </footer>
    </>
  );
}
