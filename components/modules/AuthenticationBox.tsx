import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { GoogleSignInButton } from "../elements/GoogleSignInButton";

function AuthenticationBox() {
  const { user } = useAuth();

  const shouldShowSignInButton = !user;
  return (
    <VStack height='50vh' justifyContent='center'>
      <VStack borderRadius='2xl' padding={10} boxShadow='xs'>
        <Heading fontSize={"3xl"}>Hey, necesitamos que inicies sesion </Heading>
        <Text paddingBottom={10} fontSize={"lg"} color={"gray.600"}>
          para seguir explorando nuestros productos ✌
        </Text>
        {shouldShowSignInButton && <GoogleSignInButton />}
      </VStack>
    </VStack>
  );
}

export default AuthenticationBox;
