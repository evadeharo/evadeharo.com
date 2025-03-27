import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

export function BgCanvas() {
  const groupRef = useRef<THREE.Group | null>(null);
  const [animating, setAnimating] = useState(true);
  const { viewport } = useThree();

  const top = viewport.height / 2;
  const bottom = -viewport.height / 2;
  const threshold = 0.4;

  const [position, setPosition] = useState(top)

  useFrame((_, delta) => {
    if (!groupRef.current || !animating) return

    const currentY = groupRef.current.position.y;
    const distanceToBottom = Math.abs(currentY - bottom);

    if (distanceToBottom < threshold) {
      setPosition(currentY)
      setAnimating(false);
      return;
    }

    groupRef.current.position.y = Math.max(
      THREE.MathUtils.lerp(currentY, bottom, 0.30 * delta),
      bottom
    );
  });

  return (
    <group ref={groupRef} position={[0, position, 0]}>
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
