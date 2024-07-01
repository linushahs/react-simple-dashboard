import { FC } from "react";

interface InfoIconProps extends React.SVGProps<SVGSVGElement> {}

const InfoIcon: FC<InfoIconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.88867H8.00778V5.89645H8V5.88867Z"
        stroke="currentColor"
        strokeWidth="1.56"
        strokeLinejoin="round"
      />
      <path
        d="M8 8V11.1111"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoIcon;
