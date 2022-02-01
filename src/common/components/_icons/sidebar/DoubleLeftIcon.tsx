import React from 'react'

export interface DoubleLeftIconProps extends React.SVGProps<SVGSVGElement> {}

export const DoubleLeftIcon: React.FC<DoubleLeftIconProps> = ({ ...props }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.94 0.666657C8.9405 0.754394 8.92369 0.84137 8.89051 0.922595C8.85734 1.00382 8.80845 1.0777 8.74666 1.13999L1.88667 7.99999L8.74666 14.86C8.85588 14.9875 8.91295 15.1516 8.90647 15.3194C8.89999 15.4871 8.83044 15.6463 8.71171 15.765C8.59298 15.8838 8.43382 15.9533 8.26603 15.9598C8.09825 15.9663 7.9342 15.9092 7.80666 15.8L-3.47956e-07 7.99999L7.80666 0.193324C7.90025 0.101586 8.0188 0.0394665 8.1475 0.0147301C8.2762 -0.0100063 8.40933 0.00373708 8.53026 0.0542427C8.65119 0.104748 8.75455 0.189777 8.82743 0.298699C8.9003 0.407621 8.93946 0.535605 8.94 0.666657Z"
        fill="black"
        fillOpacity="0.5"
      />
      <path
        d="M16.2733 0.666654C16.2738 0.754392 16.257 0.841367 16.2238 0.922593C16.1906 1.00382 16.1418 1.07769 16.08 1.13999L9.21998 7.99999L16.08 14.86C16.1892 14.9875 16.2463 15.1516 16.2398 15.3194C16.2333 15.4871 16.1638 15.6463 16.045 15.765C15.9263 15.8838 15.7671 15.9533 15.5993 15.9598C15.4316 15.9663 15.2675 15.9092 15.14 15.8L7.33331 7.99999L15.14 0.193321C15.2336 0.101583 15.3521 0.0394636 15.4808 0.0147272C15.6095 -0.0100092 15.7426 0.00373422 15.8636 0.0542399C15.9845 0.104745 16.0879 0.189774 16.1607 0.298696C16.2336 0.407618 16.2728 0.535603 16.2733 0.666654Z"
        fill="black"
        fillOpacity="0.5"
      />
    </svg>
  )
}