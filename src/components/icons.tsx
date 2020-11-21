import React, { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement>;

export function Share(props: IconProps) {
  return (
    <svg
      viewBox="0 0 50 44"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M49.1886 15.5387L32.0007 0.696377C30.4962 -0.602939 28.125 0.451846 28.125 2.47021V10.2879C12.4386 10.4675 0 13.6113 0 28.4771C0 34.4772 3.86533 40.4214 8.13799 43.5291C9.47129 44.4989 11.3715 43.2817 10.8799 41.7097C6.45176 27.5482 12.9802 23.7887 28.125 23.5708V32.1562C28.125 34.1777 30.4981 35.2278 32.0007 33.9301L49.1886 19.0863C50.2697 18.1525 50.2712 16.4737 49.1886 15.5387Z"
        fill="currentColor"
      />
    </svg>
  );
}
