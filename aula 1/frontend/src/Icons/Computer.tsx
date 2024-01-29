import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComputer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 35 31"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#fff"
      d="M31.29 0H2.845A2.845 2.845 0 0 0 0 2.845v18.963a2.845 2.845 0 0 0 2.845 2.844h11.378l-.949 2.845H9.008c-.789 0-1.423.634-1.423 1.422s.634 1.422 1.423 1.422h16.118c.788 0 1.423-.634 1.423-1.422s-.634-1.422-1.423-1.422H20.86l-.948-2.845H31.29a2.845 2.845 0 0 0 2.844-2.844V2.845A2.845 2.845 0 0 0 31.29 0m-.949 20.86H3.793V3.793H30.34z"
    />
  </svg>
);
export default SvgComputer;
