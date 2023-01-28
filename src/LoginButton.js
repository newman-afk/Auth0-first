import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  return (
    !isAuthenticated &&
    !isLoading && <button onClick={() => loginWithRedirect()}>Log In</button>
  );
};

export default LoginButton;
