import React from 'react'

export interface LogoIconProps extends React.SVGProps<SVGSVGElement> {}

export const LogoIcon: React.FC<LogoIconProps> = ({ ...props }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M36 0L27.4684 25.0616C27.1726 25.9306 26.4952 26.6163 25.63 26.9227L12.4987 31.5734C9.48596 32.6404 7.11583 28.8842 9.37581 26.6242L36 0Z"
        fill="#B071FF"
      />
      <path
        d="M0 0L7.97602 25.5233C8.26555 26.4498 8.98549 27.1789 9.90825 27.4802L24.0831 32.1088C27.0829 33.0883 29.3671 29.3671 27.1356 27.1356L0 0Z"
        fill="#00B7C6"
      />
      <path
        d="M0 0V32C0 34.2091 1.79086 36 4 36H21C23.4721 36 24.8833 33.1777 23.4 31.2L0 0Z"
        fill="#00FFE0"
      />
      <path
        d="M0 0V32C0 34.2091 1.79086 36 4 36H21C23.4721 36 24.8833 33.1777 23.4 31.2L0 0Z"
        fill="#12EDFF"
      />
      <path
        d="M0 0V32C0 34.2091 1.79086 36 4 36H21C23.4721 36 24.8833 33.1777 23.4 31.2L0 0Z"
        fill="url(#paint0_linear_681_14037)"
        fillOpacity="0.22"
      />
      <path
        opacity="0.22"
        d="M16.875 22.5L9 36L20.25 27L16.875 22.5Z"
        fill="white"
      />
      <path d="M36 0V32C36 34.2091 34.2091 36 32 36H9L36 0Z" fill="#8139DC" />
      <path
        d="M36 0V32C36 34.2091 34.2091 36 32 36H9L36 0Z"
        fill="url(#paint1_linear_681_14037)"
        fillOpacity="0.2"
      />
      <path
        opacity="0.2"
        d="M31.5 22.5V25.5C31.5 28.8137 28.8137 31.5 25.5 31.5H22.5M31.5 18V15.75"
        stroke="black"
        strokeOpacity="0.9"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_681_14037"
          x1="13.5"
          y1="0"
          x2="13.5"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_681_14037"
          x1="22.5"
          y1="0"
          x2="22.5"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
