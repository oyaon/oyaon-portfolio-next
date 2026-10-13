'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function StarField() {
  const positions = useMemo(() => {
    const values = new Float32Array(90 * 3);
    for (let index = 0; index < values.length; index += 3) {
      const seed = index / 3;
      values[index] = Math.sin(seed * 127.1) * 2.7;
      values[index + 1] = Math.cos(seed * 311.7) * 2.2;
      values[index + 2] = Math.sin(seed * 74.7) * 1.8 - 0.8;
    }
    return values;
  }, []);

  const geometry = useMemo(() => {
    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return bufferGeometry;
  }, [positions]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        color="#d3ff69"
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

function Sculpture({ active }: { active: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!active || !group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      y * 0.1 + 0.12,
      2,
      delta,
    );
    group.current.rotation.z = THREE.MathUtils.damp(
      group.current.rotation.z,
      -x * 0.12,
      2,
      delta,
    );
  });

  return (
    <group ref={group}>
      <mesh rotation={[0.28, 0.32, -0.16]}>
        <torusKnotGeometry args={[0.75, 0.19, 144, 12, 2, 3]} />
        <meshPhysicalMaterial
          color="#8f9a78"
          emissive="#8ba93c"
          emissiveIntensity={0.34}
          metalness={0.72}
          roughness={0.26}
          clearcoat={0.8}
          clearcoatRoughness={0.18}
        />
      </mesh>
      <mesh rotation={[0.28, 0.32, -0.16]} scale={1.015}>
        <torusKnotGeometry args={[0.75, 0.19, 144, 12, 2, 3]} />
        <meshBasicMaterial color="#d1f476" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh rotation={[0.6, 0.2, 0.5]}>
        <torusGeometry args={[1.42, 0.008, 8, 150]} />
        <meshBasicMaterial color="#b9d95e" transparent opacity={0.56} />
      </mesh>
      <mesh rotation={[1.22, -0.44, -0.38]}>
        <torusGeometry args={[1.67, 0.005, 8, 150]} />
        <meshBasicMaterial color="#d8ddc9" transparent opacity={0.42} />
      </mesh>
      <mesh rotation={[0.1, 0.8, 0.15]}>
        <torusGeometry args={[1.9, 0.004, 8, 150]} />
        <meshBasicMaterial color="#a6b47d" transparent opacity={0.28} />
      </mesh>
      <mesh position={[0.02, 0.02, 0]}>
        <icosahedronGeometry args={[0.27, 1]} />
        <meshStandardMaterial
          color="#d5ff71"
          emissive="#baff39"
          emissiveIntensity={1.1}
          metalness={0.48}
          roughness={0.22}
        />
      </mesh>
    </group>
  );
}

export default function OrbitalCanvas({
  active,
  reduceMotion,
}: {
  active: boolean;
  reduceMotion: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 38 }}
      dpr={[1, 1.35]}
      frameloop={active && !reduceMotion ? 'always' : 'demand'}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      aria-hidden="true"
    >
      <ambientLight intensity={1.05} />
      <pointLight position={[2, 2.4, 3]} intensity={26} color="#d8ff8a" />
      <pointLight position={[-2.8, -1.5, -1]} intensity={12} color="#98a97b" />
      <StarField />
      <Sculpture active={active && !reduceMotion} />
    </Canvas>
  );
}
