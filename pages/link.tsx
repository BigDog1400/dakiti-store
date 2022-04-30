import React from "react";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
interface LinkProps extends ChakraLinkProps {
  href: string;
}

function Link(props: LinkProps) {
  const { href, children, ...rest } = props;
  return (
    <NextLink passHref href={href}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
}

export default Link;
