import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { MobileNavBarMenu } from "../modules/MobileNavBarMenu";
import DesktopNavBarMenu from "../modules/DesktopNavBarMenu";

function NavBarMenuNavigation() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return isLargerThan768 ? <DesktopNavBarMenu /> : <MobileNavBarMenu />;
}

export { NavBarMenuNavigation };
