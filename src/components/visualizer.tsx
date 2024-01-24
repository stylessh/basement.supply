import React, { ComponentProps } from "react";

const Visualizer = () => {
  return (
    <article className="relative container">
      <h1 className="title font-black text-[14vw] uppercase text-center mx-auto leading-[.87]">
        Basement
        <span className="text-outline block">Supply</span>
      </h1>

      <Shape className="absolute bottom-4 md:bottom-6 left-[5%] w-[8vw]">
        EST
      </Shape>

      <Shape className="absolute bottom-4 md:bottom-6 right-[5%] w-[8vw]">
        2K19
      </Shape>
    </article>
  );
};

const Shape = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 152 73"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M129.098 60.467C142.724 54.012 150.5 45.39 150.5 36.366s-7.776-17.646-21.402-24.1c-13.511-6.4-32.283-10.4-53.098-10.4-20.815 0-39.587 4-53.098 10.4C9.276 18.72 1.5 27.342 1.5 36.366c0 9.024 7.776 17.646 21.402 24.101C36.413 66.867 55.185 70.866 76 70.866c20.815 0 39.587-3.999 53.098-10.399zM76 72.366c41.974 0 76-16.117 76-36 0-19.882-34.026-36-76-36s-76 16.118-76 36c0 19.883 34.026 36 76 36z"
        clipRule="evenodd"
      ></path>

      <text
        fill="#fff"
        fontFamily=""
        fontSize="20"
        fontWeight="bold"
        transform="translate(74 40)"
      >
        <tspan x="-17.5" y="5">
          {props.children}
        </tspan>
      </text>
    </svg>
  );
};

export default Visualizer;
