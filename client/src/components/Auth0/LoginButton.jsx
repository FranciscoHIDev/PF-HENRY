import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { isLoading, isAuthenticated, error, user, loginWithPopup, logout } =
    useAuth0();
  return <button onClick={() => loginWithPopup()}>Login</button>;
}

export default LoginButton;
