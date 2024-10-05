import cx from "classnames";
import { FC } from "react";

import COLORS from "src/constants/colors";

import {
  BulbIcon,
  CheckboxIcon,
  HeartIcon,
  MegaPhoneIcon,
  SwitchIcon,
  TargetIcon,
} from "src/components/atoms/Icons";

type Props = {
  isActive?: boolean;
  icon: string;
  text: string;
  value: string;
  onTopicChoose?: (value: string) => void;
};

const TopicItem: FC<Props> = ({
  isActive,
  icon,
  text,
  onTopicChoose,
  value,
}) => {
  const topicIcons = {
    heart: HeartIcon,
    switch: SwitchIcon,
    target: TargetIcon,
    bulb: BulbIcon,
    checkbox: CheckboxIcon,
    megaphone: MegaPhoneIcon,
  };
  const Icon = topicIcons[icon as keyof typeof topicIcons];

  return (
    <div
      className={cx(
        "flex items-center justify-center gap-2 rounded-lg border h-9 cursor-pointer hover:bg-light4 hover:border-light2 p-[10px] group",
        {
          "bg-light4 border-light2": isActive,
          "border-light3": !isActive,
        }
      )}
      onClick={() => onTopicChoose?.(value)}>
      <div className="flex-0">
        <Icon color={isActive ? COLORS.black1 : COLORS.light1} />
      </div>
      <span
        className={cx("text-sm font-semibold dark:group-hover:text-black", {
          "text-black": isActive,
          "dark:text-white": !isActive,
        })}>
        {text}
      </span>
    </div>
  );
};

export default TopicItem;
