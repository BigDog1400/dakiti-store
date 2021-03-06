import firebase from "firebase/app";
import { createContext } from "react";

export const UserContext = createContext<{
  user: firebase.User | null | undefined;
  username: string | null | undefined;
  loading: boolean;
}>({ user: undefined, username: undefined, loading: false });
