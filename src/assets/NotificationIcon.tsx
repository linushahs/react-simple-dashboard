import { FC } from "react";

interface NotificationIconProps extends React.SVGProps<SVGSVGElement> {}

const NotificationIcon: FC<NotificationIconProps> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10.5438 13.9231V14.5385C10.5438 15.1913 10.2758 15.8174 9.79886 16.279C9.3219 16.7407 8.675 17 8.00047 17C7.32595 17 6.67905 16.7407 6.20209 16.279C5.72513 15.8174 5.45718 15.1913 5.45718 14.5385V13.9231M14.8229 12.6704C13.8024 11.4615 13.0819 10.8462 13.0819 7.51346C13.0819 4.46154 11.4717 3.37423 10.1464 2.84615C9.97034 2.77615 9.80463 2.61538 9.75098 2.44038C9.5185 1.67462 8.86679 1 8.00047 1C7.13416 1 6.48205 1.675 6.25196 2.44115C6.19831 2.61808 6.0326 2.77615 5.85655 2.84615C4.52967 3.375 2.92103 4.45846 2.92103 7.51346C2.91904 10.8462 2.19858 11.4615 1.17808 12.6704C0.755255 13.1712 1.12562 13.9231 1.86517 13.9231H14.1398C14.8753 13.9231 15.2433 13.1688 14.8229 12.6704Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NotificationIcon;
