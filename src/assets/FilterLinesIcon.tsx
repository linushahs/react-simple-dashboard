import { FC } from "react";

interface FilterLinesIconProps extends React.SVGProps<SVGSVGElement> {}

const FilterLinesIcon: FC<FilterLinesIconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M1 1H13" stroke="currentColor" strokeLinecap="round" />
      <path d="M3 5H11" stroke="currentColor" strokeLinecap="round" />
      <path d="M5 9H9" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
};

export default FilterLinesIcon;
