import { useMediaQuery } from "react-responsive";

export const useScreenResolution = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)"
  })
  const isMiniMobile = useMediaQuery({
    query: "(max-width: 350px)"
  })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  // const isTablet = useMediaQuery({ query: "(max-width: 1200px && min-width: 600px)" });
  return { isDesktopOrLaptop, isTabletOrMobile,isMobile,isMiniMobile};
};
