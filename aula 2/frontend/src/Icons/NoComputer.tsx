import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNoComputer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 39 31"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#fff"
      d="M33.29 0H4.844A2.845 2.845 0 0 0 2 2.845v18.963a2.845 2.845 0 0 0 2.845 2.844h11.378l-.949 2.845h-4.266c-.789 0-1.423.634-1.423 1.422s.634 1.422 1.423 1.422h16.118c.788 0 1.423-.634 1.423-1.422s-.634-1.422-1.423-1.422H22.86l-.948-2.845h11.377a2.845 2.845 0 0 0 2.845-2.844V2.845A2.845 2.845 0 0 0 33.289 0m-.949 20.86H5.793V3.793H32.34z"
    />
    <rect
      width={4.633}
      height={44.183}
      x={35.722}
      fill="#fff"
      rx={2}
      transform="rotate(52.413 35.722 0)"
    />
  </svg>
);
export default SvgNoComputer;
