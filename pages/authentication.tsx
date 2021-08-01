import React from "react";
import { VStack, Spinner } from "@chakra-ui/react";
import { CommonLayout } from "../components/layouts/Common";
import AuthenticationBox from "../components/modules/AuthenticationBox";
import { UsernameForm } from "../components/modules/UsernameForm";
import useAuth from "../hooks/useAuth";

function Authentication() {
  const { user, username, loading } = useAuth();
  const shouldShowSignInForm = !user;
  return (
    <CommonLayout maxW='full'>
      {shouldShowSignInForm ? <AuthenticationBox /> : null}
      {!shouldShowSignInForm && !username && <UsernameForm />}
      {loading && (
        <VStack minH={"50vh"} justify={"center"}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            margin='auto'
          />
        </VStack>
      )}
    </CommonLayout>
  );
}

export default Authentication;
