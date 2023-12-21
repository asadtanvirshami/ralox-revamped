import React, { Suspense, useState, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { Center, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import modelPath from "../../../../public/images/3D/company/logo.glb";
import Backdrop from "../Canvas/Backdrop";
import CameraRig from "../Canvas/CameraRig";

const GroundPlane = () => {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.5} />
      </mesh>
    );
  };

// Custom Model component
const CustomModel = ({ texture }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();

  return (
    <group castShadow ref={modelRef}>
      <mesh castShadow>
        <primitive  object={gltf.scene} scale={[70, 70, 70]} position={[0, 0, 0]}/>
      </mesh>
    </group>
  );
};

// Main App component
const AModel = () => {
  const [controls, setControls] = useState(true);


  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 5, 15], fov: 60 }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = 'PCFSoftShadowMap';
      }}
    >
        
      {/* Lights */}
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <pointLight position={[10, 10, 10]} castShadow />
      {/* Ground Plane */}
      <GroundPlane />
      {/* Custom Model */}
      <Suspense fallback={null}>
        <Center>
          <CustomModel  controls={controls} />
        </Center>
      </Suspense>

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={controls}
        dampingFactor={0.2}
      />

      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, -10, 150]} />
    </Canvas>
  );
};

export default AModel;
