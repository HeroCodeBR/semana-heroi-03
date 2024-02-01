import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNoMic = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 35"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#fff"
      d="M11.943.017q-.272.044-.536.123a4.12 4.12 0 0 0-3.211 4.118v8.234a4.117 4.117 0 0 0 8.234 0V4.258A4.117 4.117 0 0 0 11.943.017M1.403 8.375a2.06 2.06 0 0 0-1.4 2.058v2.059c0 6.093 4.487 11.075 10.293 12.104v4.364H8.237a4.13 4.13 0 0 0-4.117 4.118h16.51a4.13 4.13 0 0 0-4.117-4.118h-2.059v-4.364c5.805-.988 10.293-6.01 10.293-12.104v-2.059a2.059 2.059 0 0 0-4.117 0v2.059a8.206 8.206 0 0 1-8.235 8.234 8.206 8.206 0 0 1-8.234-8.234v-2.059a2.06 2.06 0 0 0-2.429-2.058 2 2 0 0 0-.247 0z"
    />
    <rect
      width={3.568}
      height={37.663}
      x={22.003}
      y={1}
      fill="#fff"
      rx={1.784}
      transform="rotate(33.895 22.003 1)"
    />
  </svg>
);
export default SvgNoMic;
