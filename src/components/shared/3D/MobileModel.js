import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Center, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';

import modelPath from '../../../../public/images/3D/phone/mob.glb';

const GroundPlane = () => {
  return (
    <mesh  castShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial opaciaty={0.5} />
    </mesh>
  );        
};

const CustomModel = () => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();


  return (
    <group ref={modelRef}>
      <mesh castShadow>
        <primitive object={gltf.scene} scale={[1, 1, 1]} position={[0, 0, 0]} />
      </mesh>
    </group>
  );
};

const MobileModel = () => {
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
          <CustomModel controls={controls} />
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

export default MobileModel;
