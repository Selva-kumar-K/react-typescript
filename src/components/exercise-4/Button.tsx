import { PropsWithChildren } from "react";

export interface ButtonProps {
  size: "large" | "medium" | "small";
  onClick: () => void;
  disabled?: boolean;
  className: string;
}

export default function Button({
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return <button {...rest}>{children}</button>;
}
