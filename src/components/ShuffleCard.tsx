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
  const [hasMoved, setHasMoved] = useState(false);
  const [hovered, setHovered] = useState(false);

  const initialPosition = useMemo(
    () => new Vector3(0, 0, index * 0.001), // apiladas
    [index]
  );

  const escapePosition = useMemo(() => {
    const direction = new Vector3(
      Math.random() * 2 - 1, // x: -1 a 1
      Math.random() * 2 - 1, // y: -1 a 1
      Math.random() * 1 + 1  // z: 1 a 2
    );
    return initialPosition.clone().add(direction.multiplyScalar(1.5));
  }, [initialPosition]);

  useFrame(() => {
    if (!groupRef.current) return;
    if (hovered && !hasMoved) {
      // Huir solo una vez
      groupRef.current.position.lerp(escapePosition, 0.1);
      // Si ya está suficientemente cerca, fijamos posición
      if (groupRef.current.position.distanceTo(escapePosition) < 0.01) {
        groupRef.current.position.copy(escapePosition);
        setHasMoved(true);
      }
    }
  });

  return (
    <group
      ref={groupRef}
      position={initialPosition.toArray()}
    >
      <Html transform occlude scale={0.4}>
        <div
          className="bg-gray-secondary border border-px border-black max-w-[28rem] h-max pointer-events-auto"
          onMouseEnter={() => setHovered(true)}
        >
          <h2 className="p-4 text-[1.75rem] font-bold">{title}</h2>
          <div className="w-full h-px bg-black" />
          <h3 className="p-4 text-[1.25rem]">{subtitle}</h3>
        </div>
      </Html>
    </group>
  );
}
