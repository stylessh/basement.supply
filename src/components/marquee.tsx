import React from "react";

const Marquee = () => {
  return (
    <div className="relative mt-10 w-full border-t border-b h-16 flex items-center overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {(new Array(3).fill(0) as any).map((_: any, i: number) => (
          <span
            className="mx-4 text-2xl md:text-4xl font-bold tracking-[1px]"
            key={i}
          >
            A man can’t have enough swag  — 
          </span>
        ))}
      </div>

      <div className="absolute top-3 animate-marquee2 whitespace-nowrap">
        {(new Array(3).fill(0) as any).map((_: any, i: number) => (
          <span
            className="mx-4 text-2xl md:text-4xl font-bold tracking-[1px]"
            key={i}
          >
            A man can’t have enough swag  — 
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
