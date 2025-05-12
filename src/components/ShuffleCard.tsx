import { Html } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import { ShuffleCardType } from "../mock/data";

type Props = Omit<ShuffleCardType, "id"> & {
  index: number;
};

export default function ShuffleCard({ title, subtitle, index }: Props) {
  const groupRef = useRef<Group>(null);
  const [targetPosition, setTargetPosition] = useState<Vector3 | null>(null);

  const initialPosition = useMemo(
    () => new Vector3(0, 0, index * 0.4),
    [index]
  );

  function generateEscapePosition(): Vector3 {
    const direction = new Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 1 + 1
    );
    return initialPosition.clone().add(direction.multiplyScalar(1.5));
  }

  useFrame(() => {
    if (!groupRef.current || !targetPosition) return;
    groupRef.current.position.lerp(targetPosition, 0.05);

    if (groupRef.current.position.distanceTo(targetPosition) < 0.01) {
      groupRef.current.position.copy(targetPosition);
      setTargetPosition(null);
    }
  });

  return (
    <group ref={groupRef} position={initialPosition.toArray()}>
      <Html occlude>
        <div
          className="bg-gray-secondary border border-px border-black w-[28rem] h-max pointer-events-auto"
          onMouseEnter={() => setTargetPosition(generateEscapePosition())}
          onClick={() => setTargetPosition(generateEscapePosition())}
        >
          <h2 className="p-4 text-[1.75rem] font-bold">{title}</h2>
          <div className="w-full h-px bg-black" />
          <h3 className="p-4 text-[1.25rem]">{subtitle}</h3>
        </div>
      </Html>
    </group>
  );
}
