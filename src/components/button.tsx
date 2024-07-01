import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "solid" | "outline";
  color?: "default" | "light";
}

const Button: FC<ButtonProps> = ({
  variant,
  className,
  color = "default",
  children,
  ...props
}) => {
  const buttonClasses = {
    solid: {
      default: "bg-primary text-white hover:bg-primaryHover",
      light: "bg-primaryBg text-primary ",
    },
    outline: {
      default:
        "border border-gray-200 bg-white hover:shadow disabled:bg-gray-200 disabled:hover:shadow-none disabled:text-gray-500",
      light: "",
    },
  };

  return (
    <button
      className={twMerge(
        "py-1.5 px-4 rounded-md  flex gap-2 items-center text-center transition-colors ease-in-out duration-150",
        buttonClasses[variant][color],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
