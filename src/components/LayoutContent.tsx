import { MockedDataTypes } from "../mock/data";

type LayoutContentProps = {
  mockedData: MockedDataTypes;
};

export default function LayoutContent({ mockedData }: LayoutContentProps) {
  
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="p-8">
        <h1 className="uppercase font-bold text-[7.5rem] leading-[6.875rem]">
          {mockedData.title}
        </h1>
        <h2 className="text-[1.75rem] font-light">{mockedData.subtitle}</h2>
      </div>

      <div className="p-8 w-full flex justify-end">
        <a href={mockedData.contactHref} className="text-[1.75rem] font-light">
          {mockedData.contact}
        </a>
      </div>
    </div>
  );
}
