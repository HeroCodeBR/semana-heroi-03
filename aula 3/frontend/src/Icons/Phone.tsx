import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhone = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 46 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#fff"
      d="m6.595 18.377 7.524-3.01a1.6 1.6 0 0 0 .992-1.641l-.517-5.183a24.65 24.65 0 0 1 16.666 0l-.518 5.183a1.59 1.59 0 0 0 .993 1.641l7.524 3.01a1.61 1.61 0 0 0 1.947-.64l3.762-6.02a1.6 1.6 0 0 0-.225-1.974C32.681-2.319 13.145-2.3 1.101 9.743a1.596 1.596 0 0 0-.225 1.975l3.762 6.02a1.615 1.615 0 0 0 1.957.639"
    />
  </svg>
);
export default SvgPhone;
