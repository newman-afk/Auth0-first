import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated &&
    !isLoading && (
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
