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
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.16665 1.33331C2.43027 1.33331 1.83331 1.93027 1.83331 2.66665V13.3333C1.83331 14.0697 2.43027 14.6666 3.16665 14.6666H13.8333C14.5697 14.6666 15.1666 14.0697 15.1666 13.3333V2.66665C15.1666 1.93027 14.5697 1.33331 13.8333 1.33331H3.16665ZM5.16665 8.93563L7.57362 11.3333L12.5 6.42598L11.4031 5.33331L7.57362 9.15185L6.26355 7.84297L5.16665 8.93563Z"
        fill={color}
      />
    </svg>
  );
};

export default BulbIcon;
