import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { IgrisModel } from "./Igris";

const AriseModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5} >
          <IgrisModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        
        <PerspectiveCamera 
    // Increased Z to 4 (moves camera farther back)
    // Increased Y to 0.7 (moves camera higher)
    position={[-1, 0.7, 4]} 
    fov={70} 
    // Decreased zoom to 0.5 (zooms out significantly)
    zoom={0.5} 
    makeDefault
/>
      </Suspense>
    </Canvas>
  );
};

export default AriseModelContainer;