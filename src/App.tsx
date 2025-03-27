import { Canvas } from "@react-three/fiber";
import { BgCanvas } from "./components/BgCanvas";

export function App() {
  return (
    <div className="grid h-screen w-full place-items-center bg-[E2E2E2] relative">
      <div className="absolute top-8 start-8">
        <h1 className="uppercase font-bold">Base project UwU</h1>
      </div>
      
      <Canvas>
        <BgCanvas />
      </Canvas>
    </div>
  );
}
