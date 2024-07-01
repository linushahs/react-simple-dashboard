import { FC } from "react";

interface BackArrowIconProps extends React.SVGProps<SVGSVGElement> {}

const BackArrowIcon: FC<BackArrowIconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.7 5.88H3.58L6.1 8.4L4.84 9.68L0 4.84L4.84 0L6.1 1.28L3.6 3.78H14.7V5.88Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BackArrowIcon;
