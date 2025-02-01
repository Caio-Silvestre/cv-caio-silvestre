import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import HomeAppShowcase from "./home/home-app-showcase";

export default function Index() {
  const [classModeVideo, setClassModeVideo] = useState("welcomevideo");
  const [classModeText, setClassModeText] = useState("welcometext");
  const route = useRouter();
  const videoRef = useRef(null);
  const Welcome = () => {
    return (
      <>
        <h1
          className={classModeText}
          onClick={(e) => {
            route.push("/home/home-app-showcase");
          }}
        >
          caioSilvestre.
        </h1>
        <video
          onClick={(e) => {
            route.push("/home/home-app-showcase");
          }}
          ref={videoRef}
          className={classModeVideo}
          src={"/assets/videos/videoBgPurple.webm"}
          autoPlay
          loop
          muted
        />
      </>
    );
  };
  useEffect(() => {
    // videoRef.current.playbackRate = 0.5
  }, []);
  return (
    <>
      <HomeAppShowcase />
    </>
  );
}
