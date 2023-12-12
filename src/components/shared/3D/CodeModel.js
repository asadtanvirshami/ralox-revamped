import React, { Suspense, useState, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { Center, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import modelPath from "../../../../public/images/3D/alexandra_cardenas_code.glb";
import Backdrop from "../Canvas/Backdrop";
import CameraRig from "../Canvas/CameraRig";

// Custom Model component
const CustomModel = ({ texture }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();

  return (
    <group castShadow ref={modelRef}>
      <mesh castShadow>
        <primitive object={gltf.scene} scale={[2, 2, 2]} position={[0, 0, 0]} />
      </mesh>
    </group>
  );
};

// Main App component
const CodeModel = () => {
  const [controls, setControls] = useState(true);


  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

     
        <Center>
          <CustomModel />
        </Center>

    </Canvas>
  );
};

export default CodeModel;
