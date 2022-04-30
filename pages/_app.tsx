import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
// import { UserContext } from "../contexts/authentication";
// import useUserData from "../hooks/useUserData";
function MyApp({ Component, pageProps }: AppProps) {
  // const userData = useUserData();

  return (
    // <UserContext.Provider value={userData}>
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    // </UserContext.Provider>
  );
}

export default MyApp;
