import { FC } from "react";

interface WorkflowIconProps extends React.SVGProps<SVGSVGElement> {}

const WorkflowIcon: FC<WorkflowIconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <rect width="24" height="24" fill="none" fillOpacity="0.01" />
      <path
        d="M18.2222 5H5.77778C5.34822 5 5 5.34822 5 5.77778V9.66667C5 10.0962 5.34822 10.4444 5.77778 10.4444H18.2222C18.6518 10.4444 19 10.0962 19 9.66667V5.77778C19 5.34822 18.6518 5 18.2222 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2222 13.5557H5.77778C5.34822 13.5557 5 13.9039 5 14.3334V18.2223C5 18.6519 5.34822 19.0001 5.77778 19.0001H11.2222C11.6518 19.0001 12 18.6519 12 18.2223V14.3334C12 13.9039 11.6518 13.5557 11.2222 13.5557Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2222 13.5557H15.8889C15.4593 13.5557 15.1111 13.9039 15.1111 14.3334V18.2223C15.1111 18.6519 15.4593 19.0001 15.8889 19.0001H18.2222C18.6518 19.0001 19 18.6519 19 18.2223V14.3334C19 13.9039 18.6518 13.5557 18.2222 13.5557Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WorkflowIcon;
