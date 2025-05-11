import { MockedDataTypes } from "../mock/data";

type LayoutContentProps = {
  mockedData: MockedDataTypes;
};

export default function LayoutContent({ mockedData }: LayoutContentProps) {
  
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="p-8 flex flex-col md:gap-4">
        <h1 className="uppercase font-bold text-[3rem] md:text-[6.5rem] md:leading-[5.875rem] lg:text-[7.5rem] lg:leading-[6.875rem]">
          {mockedData.title}
        </h1>
        <h2 className="text-[1.1rem] md:text-[1.75rem] font-light md:w-[80%]">{mockedData.subtitle}</h2>
      </div>

      <div className="p-8 w-full flex justify-end">
        <a href={mockedData.contactHref} className="text-[1.1rem] md:text-[1.75rem] font-light">
          {mockedData.contact}
        </a>
      </div>
    </div>
  );
}
