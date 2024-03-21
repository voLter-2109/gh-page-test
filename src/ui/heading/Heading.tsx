import { FC, PropsWithChildren } from "react";

interface IHeading {
  className?: string;
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ className, children }) => {
  return (
    <h1
      className={`text-opacity-80 text-3xl font-semibold text-center w-1/2 ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
