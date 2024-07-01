import { FC } from "react";

interface TitleLinkIconProps extends React.SVGProps<SVGSVGElement> {}

const TitleLinkIcon: FC<TitleLinkIconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M2.58374 11.1544L6.27431 0.365967H8.17439L11.865 11.1544H10.4486L6.99452 1.14517H7.42077L4.00011 11.1544H2.58374ZM4.36088 8.6292V7.37732H10.0932V8.6292H4.36088Z"
        fill="currentColor"
      />
      <path
        d="M14.055 13.9188H0.312256V15.4701H14.055V13.9188Z"
        fill="currentColor"
      />
      <path
        d="M13.3869 14.635H0.980347V14.7539H13.3869V14.635Z"
        stroke="currentColor"
      />
    </svg>
  );
};

export default TitleLinkIcon;
