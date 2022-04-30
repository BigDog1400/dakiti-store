import { ComponentStyleConfig } from "@chakra-ui/react";
// import { variantSolid } from "../../utils";

const Button: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    // Make a variant, we'll call it `base` here and leave it empty
    primary: (_props: any) => ({}),
  },
  defaultProps: {
    // Then here we set the base variant as the default
    variant: "primary",
  },
};

export default Button;
