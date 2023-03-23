"use client";
import React from "react";

import { setStorageItem } from "@/utils/localStorage";

const Login = () => {
  const signin = () => {
    // setStorageItem(process.env.NEXT_PUBLIC_USER_TOKEN, {name: "ale", password: "123"})
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={() => signin()}>Fazer Login</button>
    </div>
  );
};

export default Login;
