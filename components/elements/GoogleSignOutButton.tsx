import { Button } from "@chakra-ui/react";
import React from "react";
import { auth } from "../../lib/firebase";
function GoogleSignOutButton() {
  return (
    <Button aria-label='Cerrar Sesion' onClick={auth.signOut}>
      Cerrar Sesion
    </Button>
  );
}

export { GoogleSignOutButton };
