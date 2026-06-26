import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Crystal = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate slowly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Gentle response to mouse pointer
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      // Smooth interpolation for mouse follow
      meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
      meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Icosahedron ref={meshRef as any} args={[1, 0]} scale={2}>
        <MeshDistortMaterial
          color="#a855f7" // purple-500
          emissive="#7e22ce" // purple-700
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.1}
          distort={0.3}
          speed={2}
        />
      </Icosahedron>
    </Float>
  );
};

export const Floating3DObject = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-visible">
      {/* Container is pointer-events-none, but Canvas needs pointer events to track mouse */}
      <div className="w-full h-[600px] pointer-events-auto opacity-80 mix-blend-screen max-w-4xl">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="!pointer-events-auto">
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
          <Crystal />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
};

export default Floating3DObject;
