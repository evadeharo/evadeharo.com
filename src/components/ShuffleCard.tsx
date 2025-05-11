import { ShuffleCardType } from "../mock/data";

export default function ShuffleCard({
  title,
  subtitle,
}: Omit<ShuffleCardType, "id">) {

  return (
    <div className="bg-gray-secondary border border-px border-black max-w-[28rem] h-max">
      <h2 className="p-4 text-[1.75rem] font-bold">{title}</h2>
      <div className="w-full h-px bg-black" />
      <h3 className="p-4 text-[1.25rem]">{subtitle}</h3>
    </div>
  );
}
