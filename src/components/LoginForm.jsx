import React from "react";
import { AuthContext } from "../providers/authContex";

const LoginForm = () => {
  const authCtx = React.useContext(AuthContext)

  const doLogin = (event) => {
    event.preventDefault();
    authCtx.doLogin(event.target[0].value);
}

  return (
    <>
      <form onSubmit={doLogin}>
        <input type='text' placeholder="user name" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
