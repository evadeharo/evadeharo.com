import { Html } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import { ShuffleCardType } from "../mock/data";

type Props = Omit<ShuffleCardType, "id"> & {
  index?: number;
};

export default function ShuffleCard({ title, subtitle, index }: Props) {
  const groupRef = useRef<Group>(null);
  const [targetPosition, setTargetPosition] = useState<Vector3 | null>(null);

  const initialPosition = useMemo(() => {
    const stepY = -0.4;
    const stepX = 1;
    const i = index ?? 0;

    const y = stepY * i + 1.8;
    const x = stepX * i - 2.5;

    const z = (1.8 - y) * -1;

    return new Vector3(x, y, z);
  }, [index]);

  function generateEscapePosition(): Vector3 {
    const direction = new Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      0
    );
    return initialPosition.clone().add(direction.multiplyScalar(1.5));
  }

  useFrame(() => {
    if (!groupRef.current || !targetPosition) return;
    groupRef.current.position.lerp(targetPosition, 0.35);

    if (groupRef.current.position.distanceTo(targetPosition) < 0.01) {
      groupRef.current.position.copy(targetPosition);
      setTargetPosition(null);
    }
  });

  return (
    <group
      ref={groupRef}
      position={initialPosition.toArray()}
      renderOrder={index}
    >
      <Html occlude zIndexRange={[100, 0]}>
        <div
          className="bg-gray-secondary border border-px border-black w-[25rem] h-max pointer-events-auto"
          onMouseEnter={() => setTargetPosition(generateEscapePosition())}
          onClick={() => setTargetPosition(generateEscapePosition())}
        >
          <h2 className="p-4 text-[1.75rem] font-bold">{title}</h2>
          <div className="w-full h-px bg-black" />
          <h3 className="p-4 text-[1.15rem]">{subtitle}</h3>
        </div>
      </Html>
    </group>
  );
}
