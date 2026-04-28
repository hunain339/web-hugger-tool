import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Octahedron, TorusKnot, Tetrahedron, Box } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const Node = ({
  position,
  color,
  shape,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  shape: "ico" | "octa" | "knot" | "tetra" | "box";
  scale?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.4;
    ref.current.rotation.y += delta * 0.5;
  });
  const props = { ref, position, scale } as const;
  const mat = (
    <meshStandardMaterial
      color={color}
      emissive={color}
      emissiveIntensity={0.45}
      roughness={0.2}
      metalness={0.7}
    />
  );

  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.8}>
      {shape === "ico" && <Icosahedron {...props} args={[0.5, 1]}>{mat}</Icosahedron>}
      {shape === "octa" && <Octahedron {...props} args={[0.55, 0]}>{mat}</Octahedron>}
      {shape === "knot" && <TorusKnot {...props} args={[0.4, 0.13, 80, 16]}>{mat}</TorusKnot>}
      {shape === "tetra" && <Tetrahedron {...props} args={[0.6, 0]}>{mat}</Tetrahedron>}
      {shape === "box" && <Box {...props} args={[0.7, 0.7, 0.7]}>{mat}</Box>}
    </Float>
  );
};

const RotatingGroup = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.18;
  });
  return (
    <group ref={ref}>
      <Node position={[-2.4, 0.5, 0]} color="#06b6d4" shape="ico" />
      <Node position={[2.4, -0.4, -0.5]} color="#22d3ee" shape="knot" scale={0.9} />
      <Node position={[0, 1.6, -1]} color="#67e8f9" shape="octa" scale={0.85} />
      <Node position={[-1.4, -1.4, 0.5]} color="#0ea5e9" shape="tetra" scale={0.8} />
      <Node position={[1.6, 1.2, 0.4]} color="#06b6d4" shape="box" scale={0.55} />
    </group>
  );
};

const Skills3DOrbit = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-50" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.9} color="#06b6d4" />
          <pointLight position={[-5, -2, 3]} intensity={0.6} color="#22d3ee" />
          <RotatingGroup />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Skills3DOrbit;
