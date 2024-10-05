import { useMemo } from "react";

import useBreakPoint from "../commons/useBreakpoint";

const useTopicListLayout = () => {
  const { isMobile } = useBreakPoint();

  const layout = useMemo(
    () => [
      {
        value: "My personal story",
        icon: "heart",
        text: "My personal story",
      },
      {
        value: "My contrarian view",
        icon: "switch",
        text: "My contrarian view",
      },
      {
        value: "My challenge and solution",
        icon: "target",
        text: isMobile ? "Challenge/solution" : "My challenge and solution",
      },
      {
        value: "A valuable insight",
        icon: "bulb",
        text: "A valuable insight",
      },
      {
        value: "What I did and learnt",
        icon: "checkbox",
        text: isMobile ? "What I did & learnt" : "What I did and learnt",
      },
      {
        value: "Promote an offer",
        icon: "megaphone",
        text: "Promote an offer",
      },
    ],
    [isMobile]
  );

  return layout;
};

export default useTopicListLayout;
