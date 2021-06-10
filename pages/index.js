import { Entity, Scene } from "aframe-react";
import { useEffect, useState } from "react";
import Banner from "../components/Banner.js";
import Navbar from "../components/Navbar/index.js";

export default function Home() {
  const [appRendered, setAppRendered] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("aframe");
      setAppRendered(true);
    }
  }, []);
  return (
    <>
      {appRendered && (
        <Scene>
          <Entity
            gltf-model="scene.gltf"
            position="2.2 1.2 -2"
            rotation="0 0 0"
            scale="0.0025 0.0025 0.0025"
            id="comp"
            animation__rotate={{
              property: "rotation",
              dur: 5000,
              loop: true,
              to: "0 360 0",
              easing: "linear",
            }}
          />
          <a-camera look-controls-enabled="false" />
        </Scene>
      )}

      <Navbar />
      <Banner />
    </>
  );
}
