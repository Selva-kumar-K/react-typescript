import { PropsWithChildren } from "react";

interface Props {
  isLarge?: boolean;
}

export default function Heading({
  children,
  isLarge = false,
}: PropsWithChildren<Props>) {
  return <div className={`${isLarge ? "text-xl" : "text-lg"}`}>{children}</div>;
}
