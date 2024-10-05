import { FC } from "react";

import COLORS from "src/constants/colors";

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const BulbIcon: FC<Props> = (props) => {
  const { color = COLORS.light1, width = 16, height = 16 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.00004 13.3333H10V14.6666H6.00004V13.3333ZM11.2707 9.14131C11.9574 8.33731 12.6667 7.50598 12.6667 5.99998C12.6667 3.42731 10.5727 1.33331 8.00004 1.33331C5.42737 1.33331 3.33337 3.42731 3.33337 5.99998C3.33337 7.52331 4.04471 8.35198 4.73404 9.15331C4.97271 9.43198 5.22004 9.72065 5.45671 10.0526C5.55271 10.19 5.71004 10.7166 5.85071 11.3333H5.32271V12.6666H10.6774V11.3333H10.1507C10.2927 10.7153 10.4507 10.1873 10.546 10.05C10.7807 9.71465 11.03 9.42331 11.2707 9.14131Z"
        fill={color}
      />
    </svg>
  );
};

export default BulbIcon;
