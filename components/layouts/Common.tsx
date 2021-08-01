import { Box, Container } from "@chakra-ui/layout";
import { ContainerProps, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import { Header } from "../elements/Header";
import Footer from "../modules/Footer";

type CommonLayoutProps = {
  children: React.ReactNode;
  maxW?: ContainerProps["maxW"];
};

function CommonLayout({ maxW = "container.xl", children }: CommonLayoutProps) {
  return (
    <Stack minH='100vh'>
      <Header />
      <Container as='main' maxW={maxW}>
        {children}
      </Container>
      <Spacer />
      <Footer />
    </Stack>
  );
}

export { CommonLayout };
