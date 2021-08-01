import { useContext } from "react";
import { UserContext } from "../contexts/authentication";

const useAuth = () => {
  const { user, username, loading } = useContext(UserContext);

  return { user, username, loading };
};

export default useAuth;
