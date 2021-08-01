import { Button } from "@chakra-ui/react";
import React from "react";
import { auth, googleAuthProvider } from "../../lib/firebase";
import { FcGoogle } from "react-icons/fc";
function GoogleSignInButton() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      aria-label='Sign In With Google'
      leftIcon={<FcGoogle fontSize='2rem' />}
      onClick={signInWithGoogle}
    >
      Iniciar Sesion con Google
    </Button>
  );
}

export { GoogleSignInButton };
