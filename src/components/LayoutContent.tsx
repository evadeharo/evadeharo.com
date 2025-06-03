import { useEffect, useState } from "react";
import { MockedDataTypes } from "../mock/data";

type LayoutContentProps = {
  mockedData: MockedDataTypes;
};

export default function LayoutContent({ mockedData }: LayoutContentProps) {
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayMessage(false)
    }, 5000)
  },[displayMessage])

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="p-4 lg:p-8 flex flex-col md:gap-4">
        <h1 className="uppercase font-bold text-[3rem] md:text-[6.5rem] md:leading-[5.875rem] lg:text-[7.5rem] lg:leading-[6.875rem]">
          {mockedData.title}
        </h1>
        <h2 className="text-[1.1rem] md:text-[1.75rem] font-light md:w-[80%]">
          {mockedData.subtitle}
        </h2>
      </div>

      <div className="p-4 lg:p-8 w-full flex flex-col lg:flex-row justify-between items-end">
        <div className="relative z-40">
          {displayMessage ? (
            <div className="absolute bottom-[2.5rem] right-0 lg:left-0 bg-gray-secondary border border-px border-black w-[70vw] lg:w-[25vw] p-3">
              <span>
                {mockedData.jokeText.text}
              </span>
            </div>
          ) : null}
          <button
            onClick={() => setDisplayMessage(true)}
            className="w-max underline text-left"
          >
            <span>{mockedData.jokeText.label}</span>
          </button>
        </div>

        <a
          href={mockedData.contactHref}
          className="text-[1.1rem] md:text-[1.75rem] font-light"
        >
          {mockedData.contact}
        </a>
      </div>
    </div>
  );
}
