import { Appbar } from "./Appbar";
import { MobileApp } from "./MobileApp";
import { useMediaQuery } from "../Hooks/useMediaQuery";

const ResponsiveBar = () => {
  const isLgScreen = useMediaQuery("(min-width: 1024px)");

  return isLgScreen ? <Appbar /> : <MobileApp />;
};

export default ResponsiveBar;
