import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef } from "react";

import * as THREE from "three"

export function BgCanvas() {
  const groupRef = useRef<THREE.Group | null>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.position.y = 
      THREE.MathUtils.lerp(groupRef.current.position.y, -3, 0.05 * delta);
  });

  return (
    <group ref={groupRef} position={[0, 3, 0]}> 
      <Html
        occlude
        as="div"
        className="w-24 bg-amber-400 p-4 text-center leading-none"
      >
        <h2>HOLA que ase</h2>
      </Html>
    </group>
  );
}
