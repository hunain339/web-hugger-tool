import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Icosahedron,
  Torus,
  Octahedron,
  Stars,
  Environment,
} from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

/* ---------- Mouse-reactive central blob ---------- */
const FloatingShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
    // Mouse parallax
    const targetX = mouse.x * 0.4;
    const targetY = mouse.y * 0.4;
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={meshRef} args={[1.3, 4]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.85}
          distort={0.4}
          speed={2}
        />
      </Icosahedron>
    </Float>
  );
};

/* ---------- Orbiting smaller satellites ---------- */
const Satellite = ({
  radius,
  speed,
  size,
  color,
  offset,
  yOffset = 0,
  shape = "octa",
}: {
  radius: number;
  speed: number;
  size: number;
  color: string;
  offset: number;
  yOffset?: number;
  shape?: "octa" | "ico";
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = yOffset + Math.sin(t * 1.5) * 0.3;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.012;
  });
  const Geo = shape === "octa" ? Octahedron : Icosahedron;
  return (
    <Geo ref={ref} args={[size, 0]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.7}
      />
    </Geo>
  );
};

/* ---------- Particle field ---------- */
const Particles = ({ count = 600 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.04;
    ref.current.rotation.x = s.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#22d3ee"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const OrbitRing = ({ radius = 2.2, opacity = 0.35, tilt = Math.PI / 2.4 }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.z = s.clock.elapsedTime * 0.3;
    ref.current.rotation.x = tilt;
  });
  return (
    <Torus ref={ref} args={[radius, 0.012, 16, 120]}>
      <meshBasicMaterial color="#06b6d4" transparent opacity={opacity} />
    </Torus>
  );
};

const Hero3DScene = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-80"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.35} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#06b6d4" />
          <pointLight position={[-5, -3, -2]} intensity={0.7} color="#ffffff" />
          <pointLight position={[3, -2, 4]} intensity={0.5} color="#22d3ee" />

          <Stars
            radius={50}
            depth={40}
            count={1200}
            factor={3}
            saturation={0}
            fade
            speed={0.8}
          />
          <Particles count={500} />

          <FloatingShape />
          <OrbitRing radius={2.2} opacity={0.4} />
          <OrbitRing radius={2.6} opacity={0.18} tilt={Math.PI / 1.8} />

          <Satellite radius={2.4} speed={0.6} size={0.13} color="#22d3ee" offset={0} />
          <Satellite radius={2.7} speed={-0.45} size={0.1} color="#67e8f9" offset={2.1} yOffset={0.5} shape="ico" />
          <Satellite radius={2.0} speed={0.8} size={0.09} color="#0ea5e9" offset={4.3} yOffset={-0.4} />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
