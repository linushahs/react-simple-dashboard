import { FC } from "react";

interface DownloadIconProps extends React.SVGProps<SVGSVGElement> {}

const DownloadIcon: FC<DownloadIconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M15.5 9.90137C17.0225 9.90977 17.8471 9.97767 18.3847 10.5153C19 11.1306 19 12.1204 19 14.1V14.8C19 16.7803 19 17.7701 18.3847 18.3854C17.7701 19 16.7796 19 14.8 19H9.2C7.2204 19 6.2299 19 5.6153 18.3854C5 17.7694 5 16.7803 5 14.8V14.1C5 12.1204 5 11.1306 5.6153 10.5153C6.1529 9.97767 6.9775 9.90977 8.5 9.90137"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.9999 5V14.1M11.9999 14.1L9.8999 11.65M11.9999 14.1L14.0999 11.65"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;
