import { Canvas } from "@react-three/fiber";
import { MockedDataTypes } from "../mock/data";
import ShuffleCard from "./ShuffleCard";
import { Suspense } from "react";

export default function ShuffleContainer({
  items,
}: Pick<MockedDataTypes, "items">) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          {items.map((card, i) => (
            <ShuffleCard key={card.id} {...card} index={i} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
