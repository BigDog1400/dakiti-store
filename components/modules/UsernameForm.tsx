import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { firestore } from "../../lib/firebase";
import { debounce } from "lodash";
import useAuth from "../../hooks/useAuth";
function UsernameForm() {
  const { user } = useAuth();
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  console.log(user);

  useEffect(() => {
    checkUserName(formValue);
  }, [formValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    if (newValue.length < 3) {
      setFormValue(newValue);
      setIsValid(false);
      setIsLoading(false);
    }

    if (re.test(newValue)) {
      setFormValue(newValue);
      setIsValid(true);
      setIsLoading(false);
    }
  };

  const checkUserName = useCallback(
    debounce(async (username: string) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        console.log("Firestore Read Executed!");
        setIsValid(!exists);
        setIsLoading(false);
      }
    }, 500),
    []
  );

  const obSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit button clicked");
    // Create a reference for both the username and the user document
    const usernameDoc = firestore.doc(`usernames/${formValue}`);
    const userDoc = firestore.doc(`users/${formValue}`);

    // Commit both docs together as a batch write
    const bath = await firestore.batch();
    bath.set(userDoc, {
      username: formValue,
      photoUrl: user?.photoURL,
      displayName: user?.displayName
    });
    bath.set(usernameDoc, {
      uid: user?.uid
    });
    await bath.commit();
  };
  return (
    <VStack minH={"50vh"} justify={"center"}>
      <Stack borderRadius='2xl' padding={10} boxShadow='xs'>
        <Stack align={"center"}>
          <Heading fontFamily='fireSans' fontSize={"3xl"}>
            Elije tu nombre de usuario
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={"white"} p={8}>
          <form onSubmit={obSubmit}>
            <Stack spacing={4}>
              <FormControl isInvalid={!isValid} id='email'>
                <FormLabel fontFamily='fireSans'>Nombre de usuario</FormLabel>
                <Input
                  value={formValue}
                  type='text'
                  placeholder='Nombre de usuario'
                  onChange={onChange}
                />
                {!isValid && (
                  <FormErrorMessage>
                    {formValue.length < 3
                      ? "Este nombre de usuario es muy corto"
                      : "Este nombre de usuario no esta disponible"}
                  </FormErrorMessage>
                )}
                {isValid && formValue.length > 0 && (
                  <FormHelperText>
                    {"Este nombre de usuario esta disponible"}
                  </FormHelperText>
                )}
              </FormControl>
              <Button
                fontFamily='fireSans'
                isLoading={isLoading}
                fontWeight='light'
                type='submit'
              >
                Crear
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </VStack>
  );
}

export { UsernameForm };
