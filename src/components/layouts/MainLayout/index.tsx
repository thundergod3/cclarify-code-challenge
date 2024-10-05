import { FC } from "react";
import cx from "classnames";

import { useAppSelector } from "src/stores/stores";

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  const { isDarkMode } = useAppSelector((state) => state.common);

  return (
    <div
      className={cx("w-full px-4 dark:bg-black", {
        dark: isDarkMode,
      })}>
      <div className="max-w-5xl m-auto ">{children}</div>
    </div>
  );
};

export default MainLayout;
