import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Html, ScrollControls, useScroll } from "@react-three/drei";
import * as THREE from "three";

export function BgCanvas() {
  const groupRef = useRef<THREE.Group | null>(null);
  const { viewport } = useThree();

  const top = viewport.height / 2;
  const bottom = -viewport.height / 2;
  const thresholdBot = 0.8;
  const thresholdTop = 0.3;
  const velocity = 0.5;

  const [direction, setDirection] = useState(1);

  const scroll = useScroll();

  const changeDirection = (currentY: number) => {
    if (direction === 1 && Math.abs(currentY - bottom) < thresholdBot) {
      setDirection(-1);
    } else if (direction === -1 && Math.abs(currentY - top) < thresholdTop) {
      setDirection(1);
    }
  };

  const softlyBorderAnimation = (currentY: number, delta: number) => {
    const target = direction === 1 ? bottom : top;
    const lerp = THREE.MathUtils.lerp(currentY, target, velocity * delta);
    groupRef.current!.position.y =
      direction === 1 ? Math.max(lerp, bottom) : Math.min(lerp, top);
  };

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const scrollPos = scroll?.range(0, 1) * (bottom - top) + top;
    const currentY = groupRef.current.position.y;

    if (scroll && scroll.range(0, 1) !== 0) {
      groupRef.current.position.y = scrollPos;
    } else {
      changeDirection(currentY);
      softlyBorderAnimation(currentY, delta);
    }
  });

  return (
    <ScrollControls pages={3}>
      <group ref={groupRef} position={[0, top, 0]}>
        <Html
          occlude
          as="div"
          className="w-24 bg-amber-400 p-4 text-center leading-none"
        >
          <h2>HOLA que ase</h2>
        </Html>
      </group>
    </ScrollControls>
  );
}
