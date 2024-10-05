import { FC } from "react";

import COLORS from "src/constants/colors";

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const HeartIcon: FC<Props> = (props) => {
  const { color = COLORS.light1, width = 16, height = 16 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.3333 5.63988C15.3333 10.5021 8.53752 14.4378 8.24811 14.6003C8.17184 14.6439 8.08657 14.6666 7.99996 14.6666C7.91334 14.6666 7.82808 14.6439 7.7518 14.6003C7.4624 14.4378 0.666626 10.5021 0.666626 5.63988C0.667839 4.49811 1.09593 3.40346 1.85697 2.5961C2.61802 1.78874 3.64987 1.3346 4.72615 1.33331C6.07823 1.33331 7.26204 1.95013 7.99996 2.99273C8.73788 1.95013 9.92169 1.33331 11.2738 1.33331C12.35 1.3346 13.3819 1.78874 14.1429 2.5961C14.904 3.40346 15.3321 4.49811 15.3333 5.63988Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartIcon;
