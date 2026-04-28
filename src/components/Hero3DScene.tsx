import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

const FloatingShape = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={meshRef} args={[1.3, 2]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#ff1a2e"
          emissive="#8b0010"
          roughness={0.25}
          metalness={0.6}
          distort={0.35}
          speed={1.8}
          wireframe={false}
        />
      </Icosahedron>
    </Float>
  );
};

const OrbitRing = () => {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.z = s.clock.elapsedTime * 0.3;
    ref.current.rotation.x = Math.PI / 2.4;
  });
  return (
    <Torus ref={ref} args={[2.2, 0.015, 16, 100]}>
      <meshBasicMaterial color="#ff1a2e" transparent opacity={0.35} />
    </Torus>
  );
};

const Hero3DScene = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-60"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#ff1a2e" />
          <pointLight position={[-5, -3, -2]} intensity={0.6} color="#ffffff" />
          <FloatingShape />
          <OrbitRing />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
