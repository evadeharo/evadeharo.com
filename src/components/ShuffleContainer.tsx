import { MockedDataTypes } from "../mock/data";
import ShuffleCard from "./ShuffleCard";

export default function ShuffleContainer({
  items,
}: Pick<MockedDataTypes, "items">) {
  return (
    <div className="w-full h-full absolute inset-0">
      {items.map((card) => (
        <ShuffleCard key={card.id} {...card} />
      ))}
    </div>
  );
}
