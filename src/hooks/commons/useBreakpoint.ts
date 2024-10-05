import { useMediaQuery } from "react-responsive";

const useBreakPoint = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useBreakPoint;
