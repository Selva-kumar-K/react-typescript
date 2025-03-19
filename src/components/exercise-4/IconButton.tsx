import { PropsWithChildren, ReactNode } from "react";
import Button, { ButtonProps } from "./Button";

interface IconButtonProps extends Omit<ButtonProps, "size"> {
  icon: ReactNode
}
export default function IconButton({
  icon,
  children,
  ...rest
}: PropsWithChildren<IconButtonProps>) {
  return (
    <Button size="large" {...rest}>
      {icon} {children}
    </Button>
  );
}
