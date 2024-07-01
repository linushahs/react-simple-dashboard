import { FC } from "react";

interface InfiniteIconProps extends React.SVGProps<SVGSVGElement> {}

const InfiniteIcon: FC<InfiniteIconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M7.5 9.5C6.78125 10.2997 5.73469 11 4.5625 11C2.87125 11 1.5 9.65625 1.5 8C1.5 6.34375 2.87125 5 4.5625 5C7 5 8.5 8 8.5 8C8.5 8 10 11 12.4375 11C14.1287 11 15.5 9.65625 15.5 8C15.5 6.34375 14.1287 5 12.4375 5C11.2653 5 10.2188 5.70031 9.5 6.5"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default InfiniteIcon;
