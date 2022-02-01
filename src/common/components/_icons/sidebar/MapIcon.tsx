import React from 'react'

export interface MapIconProps extends React.SVGProps<SVGSVGElement> {}

export const MapIcon: React.FC<MapIconProps> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.428 2.17291L15.45 0.221039L8.45156 2.19241L1.94339 0.346195C1.80393 0.306627 1.6572 0.299939 1.51472 0.326656C1.37224 0.353373 1.23789 0.412767 1.12224 0.500171C1.00659 0.587575 0.91279 0.700607 0.8482 0.830386C0.783611 0.960165 0.749997 1.10315 0.75 1.24812V17.2137C0.750709 17.4584 0.830844 17.6962 0.97835 17.8914C1.12586 18.0866 1.33276 18.2286 1.56792 18.296L8.44997 20.2484L15.4515 18.2762L22.06 20.1247C22.1994 20.1637 22.3458 20.1699 22.488 20.1428C22.6301 20.1157 22.764 20.0561 22.8793 19.9687C22.9945 19.8812 23.0879 19.7682 23.1523 19.6386C23.2166 19.509 23.25 19.3663 23.25 19.2216V3.25634C23.2494 3.01095 23.1688 2.77244 23.0205 2.57695C22.8722 2.38145 22.6642 2.23961 22.428 2.17291V2.17291ZM7.64062 18.4594L2.25 16.9301V1.99235L7.64062 3.5216V18.4594ZM14.7007 16.929L9.14062 18.4952V3.55666L14.7007 1.99048V16.929ZM21.75 18.4802L16.2007 16.9281V1.98855L21.75 3.54063V18.4802Z"
        fill="currentColor"
      />
    </svg>
  )
}