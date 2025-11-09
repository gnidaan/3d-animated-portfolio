import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { KobeModel } from "./Kobe";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MugModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={10}>
          <KobeModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default MugModelContainer;
