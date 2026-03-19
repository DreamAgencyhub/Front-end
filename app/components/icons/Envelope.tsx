import * as React from "react";
import type { SVGProps } from "react";
const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    data-name="Layer 1"
    viewBox="0 0 64 58.75"
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <path d="M64 10.47v37.82c-2.27 4.74-5.61 10.24-11.99 10.28L14 58.76C6.83 58.8 2.52 54.32.01 48.39V10.38C2.51 4.44 6.83-.04 13.99 0L52 .19c6.38.03 9.73 5.54 11.99 10.28ZM37.62 30.9l20.32-20.4c-.94-2.75-4.05-5.12-6.81-5.12H12.87c-2.78 0-5.85 2.35-6.81 5.14l21.35 21.22c2.53 2.52 8.02 1.36 10.21-.84m21.06 14.03V17.38l-17.36 17.3c-5.58 5.2-13.81 4.95-19.13-.51L5.34 17.38v27.99c-.01 4.31 3.4 7.6 7.59 8.01h37.12c4.69.08 8.63-3.22 8.63-8.45" />
  </svg>
);
export default SvgEnvelope;
