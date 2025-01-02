import React, { JSX } from "react";

export function PenIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  const { className, stroke = "currentColor", ...restProps } = props;

  return (
    <svg
      width="20"
      height="30"
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-black dark:stroke-white ${className || ""}`}
      stroke={stroke} // Prop for dynamic stroke color
      {...restProps}
    >
      <path
        d="M1 21V12.6944C1 11.1287 1 10.3459 1.21454 9.6077C1.42908 8.86948 1.84589 8.21812 2.6795 6.91542L5.3359 2.76419C6.0885 1.58806 6.4648 1 7 1C7.5352 1 7.9115 1.58806 8.6641 2.76419L11.3205 6.91542C12.1541 8.21812 12.5709 8.86948 12.7855 9.6077C13 10.3459 13 11.1287 13 12.6944V21"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10C2.63152 10.3231 3.4887 10.9732 4.28009 10.9991C5.2988 11.0324 5.9868 10.1372 7 10.1372C8.0132 10.1372 8.7012 11.0324 9.7199 10.9991C10.5113 10.9732 11.3685 10.3231 12 10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11V21"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 4H9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BagIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  const { className, stroke = "currentColor", ...restProps } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-black dark:stroke-white ${className || ""}`}
      stroke={stroke}
      {...restProps}
    >
      <path
        d="M12 15V16.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11L3.15288 13.8633C3.31714 17.477 3.39927 19.2839 4.55885 20.3919C5.71843 21.5 7.52716 21.5 11.1446 21.5H12.8554C16.4728 21.5 18.2816 21.5 19.4412 20.3919C20.6007 19.2839 20.6829 17.477 20.8471 13.8633L21 11"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.84718 10.4431C4.54648 13.6744 8.3792 15 12 15C15.6208 15 19.4535 13.6744 21.1528 10.4431C21.964 8.90056 21.3498 6 19.352 6H4.648C2.65023 6 2.03603 8.90056 2.84718 10.4431Z"
        strokeWidth="1.5"
      />
      <path
        d="M16 6L15.9117 5.69094C15.4717 4.15089 15.2517 3.38087 14.7279 2.94043C14.2041 2.5 13.5084 2.5 12.1169 2.5H11.883C10.4916 2.5 9.79587 2.5 9.2721 2.94043C8.74832 3.38087 8.52831 4.15089 8.0883 5.69094L8 6"
        strokeWidth="1.5"
      />
    </svg>
  );
}
